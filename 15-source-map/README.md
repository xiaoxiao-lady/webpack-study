```
> 作用：是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具

      备良好的可读性，想要调试源码就需要 soucre map

> 加载：map 文件只要不打开开发者工具，浏览器是不会加载的
> 线上环境一般有三种处理方案：

    *hidden-source-map：借助第三方错误监控平台 Sentry 使用
    *nosources-source-map：只会显示具体行数以及查看源代码的错误栈。安全性比 sourcemap 高
    *sourcemap：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)
    *注意：避免在生产中使用 inline- 和 eval-，因为它们会增加 bundle 体积大小，并降低整体性能
```
