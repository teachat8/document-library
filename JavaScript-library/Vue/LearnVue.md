Vue
===

> create by **teachat** on **2019-4-4 19:36:55**   

> Recently revised in **2019-4-10 21:44:29**

<br>

<div id="root"></div>

new Vue({el: "#root",data: {}})

创建Vue实例，让Vue实例接管页面上id="root"的dom元素里面的内容；el表示Vue实例和哪一个dom节点作绑定。

v-if:   当变量数据项的值为false时,会把作用的标签从DOM移除
v-show: 当变量数据项的值为false时,作用的标签不会从DOM移除，只是把标签的display属性变成了display:none。

v-htmL:不会进行转义， v-text:会进行转义

父组件通过 props 传递数据给子组件，子组件不能修改父组件传递过来的参数,需要拷贝一份副本，更改这个副本。

子组件通过 emit 发送事件传递数据给父组件，父组件监听子组件传递过来的事件。这两种方式是最常用的父子通信实现办法。

子组件中定义data只能是一个函数，不能是对象,每个子组件拥有独立的data，不会出现多个子组件data冲突。

ref使用，在标签上定义ref,通过this.$refs.name获取到的是标签对应的dom元素。

在组件上定义ref,通过this.$refs.name获取到的是组件的引用。

<br>
template模板占位符，包裹一些元素，不被渲染出来。

改变数组中的数据，如何使数据变化，页面跟着变化。第一种：改变数组的引用 第二种方法 push pop shift unshift splice sort reverse 数组的变异方法 第三种：用set方法。

改变对象中的数据如何使数据变化，页面跟着变化。第一种：改变对象的引用 第二种方法用set方法。

计算属性值是一个函数，内置缓存的，计算属性依赖的变量没发生变化，它就不会重新计算。
<br>

给组件绑定原生事件，只要在绑定的事件后面加上native修饰符。

非父子组件间传值通过一个bus总线连接起来了。

非父子组件间传值两种方法：方法一：vuex数据层框架 方法二：Bus/总线机制/发布订阅模式/观察者模式。

Vue单向数据流，子组件不能修改父组件传递过来的值，解决办法可以在子组件定义一个data（data是一个函数）,拷贝一份传入的值赋值给data中的变量，修改子组件data中的数据。

vue -V 查看vue cli版本号

多页面应用：每次页面跳转都会返回一个新的HTML。 优点：首屏时间快，SEO效果好。   缺点：页面切换慢。

单页面应用： 每次页面跳转不去加载HTML文件，而是通过JS动态把当前的页面的内容删除掉，再去把新的页面上DOM结构渲染出来。  优点：页面切换快。  缺点：首屏时间稍慢，SEO差。

移动端引入reset.css，采用rem布局，1rem = html font-size = 50px


<br>

## 文档协议 
> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**teachat** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="wzh" property="cc:attributionName" rel="cc:attributionURL">teachat</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。