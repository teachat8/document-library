Vue项目自动转换px为rem
===

> create by **teachat** on **2019-7-2 16:40:36**   
> Recently revised in **2019-7-2 16:42:33**

最近在用Vue-cli2.x 开发移动端的项目，项目中使用`postcss-pxtorem`将px自动转换成rem。

### 配置`postcss-pxtorem` 自动转换px为rem

1. 安装 `postcss-pxtorem`

```
npm i postcss-pxtorem -D
```

2. 修改根目录的 `.postcssrc.js` 文件

找到 `plugins` 属性新增 `pxtorem` 的设置

```
    'postcss-pxtorem': {
      //根元素字体大小
      rootValue: 37.5,
      //px转换为rem的属性
      propList: ['*']
    }
```
按照上述配置后，即可在开发中直接使用`px` 单位开发。

例如设计稿是 750 * 1136，那么可以直接在页面中写
```
// input
body {
	width: 750px;
	height: 1136px;
}
```
将被转换为
```
// output
body {
	width: 20rem;
	height: 30.29333rem;
}
```
更多的配置项，详见postcss-pxtorem官方文档：https://www.npmjs.com/package/postcss-pxtorem

注意：此方法支持import 和 .vue单文件中style。暂不支持style中使用@import url();

可能遇到的坑：如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。







## 文档协议 
> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**teachat** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="wzh" property="cc:attributionName" rel="cc:attributionURL">teachat</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。