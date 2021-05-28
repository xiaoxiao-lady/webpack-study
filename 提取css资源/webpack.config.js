const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
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
  ],
  mode: "development", //开发模式
};
