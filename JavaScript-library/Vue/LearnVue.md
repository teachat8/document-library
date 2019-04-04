Vue
===

> create by **teachat** on **2019-4-4 19:36:55**   
> Recently revised in **2019-4-4 19:38:27**

<br>

<div id="root"></div>

new Vue({el: "#root",data: {}})

创建Vue实例，让Vue实例接管页面上id="root"的dom元素里面的内容；el表示Vue实例和哪一个dom节点作绑定。

v-if:   当变量数据项的值为false时,会把作用的标签从DOM移除
v-show: 当变量数据项的值为false时,作用的标签不会从DOM移除，只是把标签的display属性变成了display:none

父组件通过 props 传递数据给子组件，子组件通过 emit 发送事件传递数据给父组件，这两种方式是最常用的父子通信实现办法。

<br>



<br>

## 文档协议 
> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**teachat** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="wzh" property="cc:attributionName" rel="cc:attributionURL">teachat</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。