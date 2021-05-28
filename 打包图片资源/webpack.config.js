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
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader", //这个里面还需要下载file-loader
        options: {
          limit: 8 * 1024,
          esModule: false,
          name: "[hash:10].[ext]", //图片重命名[hash:10]取图片的hash前10位，ext表示文件原来的扩展名
          outputPath: "imgs",
        },
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
