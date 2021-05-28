const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
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
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  mode: "development",
};
