const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "build.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //  打包其他的资源：就是用排除的方式，排除使用指定插件打包的方式,
      {
        exclude: /\.(css|js|html|less)$/, //里面需要排除什么写什么
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  mode: "development",
  // 启动devServer的指令为:npx  webpack-dev-server
  devServer: {
    contentBase: resolve(__dirname, "build"), //项目构建后的目录
    compress: true, // 启动gzip压缩
    port: 3000, // 端口号
    open: true, // 自动打开浏览器
  },
};
