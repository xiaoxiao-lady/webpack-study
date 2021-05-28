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
        loader: "eslint-loader",
        options: {
          fix: true, //自动修复eslint的错误
        },
      },
    ],
    // 在package.json里面配置检测规则
    // "eslintConfig": {
    //   "extends":"airbnb-bse"
    // }
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  mode: "development",
};
