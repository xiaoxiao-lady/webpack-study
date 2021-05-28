// 1.作用：webpack.config.js文件是webpack的配置文件
// 2.指示webpack干哪些活，当运行webpack的时候，会加载里面的配置
// 3.这里的作用：就是让webpack能够打包样式资源
// 4.所有的构建工具都是基于node.js平台运行的--模块化默认采用common.js平台运行的
const { resolve } = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "build.js", //输出文件名
    path: resolve(__dirname, "build"), //输出的路径
  },
  // loader的配置
  module: {
    rules: [
      {
        test: /\.css$/, //后缀名是.css结尾的
        // use数组中loader的执行顺序是从下到上，从右到左
        use: [
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          "style-loader",
          // 将css文件变成commonJs模块加载js中，里面内容是样式字符串
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  // 插件
  plugins: [],
  mode: "development", //开发模式
  // mode: "production",
};
// 依赖安装到最外面一层，利用的了node里面找包的时候是一层向外找包的特点
