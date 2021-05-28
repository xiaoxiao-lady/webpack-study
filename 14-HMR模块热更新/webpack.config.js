const { resolve } = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin"); //提取css为单独的文件，不要写js一起
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css文件
const htmlWebpackPlugin = require("html-webpack-plugin");
const commonCssLoader = [
  "style-loader",
  // miniCssExtractPlugin.loader, //这个loader就是替代style-loader，提取js中的css为单独的文件
  "css-loader",
  {
    //postcss-loader的作用就是帮助package.json中browserslist里面的配置，通过配置加载指定的css的兼容性样式
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          [
            "postcss-preset-env",
            {
              ident: "postcss",
            },
          ],
        ],
      },
    },
  },
  //这个是在package.json中配置的，生产环境是默认的环境，想要激活开发环境需要设置成nodejs
  // 是开发环境process.env.NODE_ENV="development"
];
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/build.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      // 【处理css】
      {
        test: /\.css$/, //后缀名是.css结尾的
        use: [...commonCssLoader],
      },
      {
        test: /\.less$/,
        use: [...commonCssLoader, "less-loader"],
      },
      // 【检查eslint】
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre", //这个是指的所有的loader里面优先执行的是这个loader
        loader: "eslint-loader",
        options: {
          fix: true, //自动修复eslint的错误
        },
      },
      // 在package.json里面配置检测规则
      // "eslintConfig": {
      //   "extends":"airbnb-bse"
      // }

      // 【检查兼容性】
      {
        test: /\.js$/,
        exclude: /node_modules/, //表示不检测安装的第三方包吗，只检测自己的代码
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage", //按需加载
                corejs: {
                  version: 3, //指定 core 版本
                },
                targets: {
                  //指定兼容性做到那个版本的浏览器
                  chrome: "60",
                  firefox: "60",
                  ie: "9",
                  edge: "17",
                  safari: "10",
                },
              },
            ],
          ],
        },
      },
      // 【图片资源】
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024, //表示在8bt之内的话会自动转化为64的结构
          esModule: false,
          name: "[hash:10].[ext]", //图片重命名[hash:10]取图片的hash前10位，ext表示文件原来的扩展名
          outputPath: "imgs",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        exclude: /.(png|jpg|gif|js|css|less|html)/, //排除法
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "css/main.css",
    }),
    new optimizeCssAssetsWebpackPlugin(), //压缩css
    new htmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
  ],
  mode: "development",
  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,
    port: 3000,
    open: true,
    hot: true, //开启HMR的功能，webpack配置修改之后需要我们重新执行程序
  },
};
