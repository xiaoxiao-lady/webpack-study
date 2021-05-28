const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin"); //提取css资源
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css文件
// process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/build.js", //输出文件名
    path: resolve(__dirname, "build"), //输出的路径
  },
  // loader的配置
  module: {
    rules: [
      {
        test: /\.css$/, //后缀名是.css结尾的
        use: [
          // "style-loader", //创建style标签，将样式放入
          miniCssExtractPlugin.loader, //这个loader就是替代style-loader，提取js中的css为单独的文件
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
        ],
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new miniCssExtractPlugin({
      filename: "css/main.css",
    }),
    new optimizeCssAssetsWebpackPlugin(), //压缩css
    // optimize-css-assets-webpack-plugin
  ],
  mode: "development", //开发模式
};
