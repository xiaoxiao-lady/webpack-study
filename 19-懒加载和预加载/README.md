就是在模块化引入文件的时候，等到文件用到的时候再加载文件

```
正常加载
import {mul} from "./test.js"
```

懒加载设置之前触发需要加载文件的代码的时候再引入
webpackPre 谁知预加载

```
import(/*webpackPrefetch*/"./test").then(({mul})=>{
    console.log(mul(4,5))
})

```
