## 缓存

这里的缓存是打包之后的文件请求服务端时候的缓存，所以我们需要展示的是打包出来 build 里面的文件效果

## 解决缓存的方式

#### babel 缓存

在 babel-loader 里面设置 cacheDirectory: true,

#### hash 缓存

每次构建的时候会生成唯一的 hash 值
问题：因为 js 和 css 公用一个 hash 值，如果重新的打包，会导致所有的缓存失效。（可能我只是改动了一个文件）

#### chunkhash 缓存

每次构建的时候 chunk 会生成的 hash 值
如果打包来源同一个 chunk，那么 hash 值就一样，这里的 css 是在 js 中引入的，所以还是同一个 chunk

#### contenthash 缓存

根据文件的内容生成 hash，文件的内容变化就会生成新的 hash，这样的话就是各自文件生成的 hash 也是不一样的
