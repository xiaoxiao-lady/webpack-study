import "@babel/polyfill"; //直接是在入口文件中引入，直接解决所有的语法兼容性问题，但是带来的问题就是体积太大，所以好多还是按需配置
const add = (x, y) => {
  return x + y;
};
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1111);
  }, 1000);
});
console.log(promise);
console.log(add(2, 3));
