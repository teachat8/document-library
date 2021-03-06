React
===

> create by **teachat** on **2019-4-1 10:10:36**   
> Recently revised in **2019-4-3 15:46:55**

<br>

React 16.0以上使用PureComponent底层实现了shouldComponentUpdate，提升了react的性能。
<br>
父组件向子组件传递属性，子组件通过props接受父组件传递过来的参数。
子组件传递数据给父组件，子组件就要执行父组件传递过来的方法。

<br>
React.Fragment 是占位符，让最外层的div隐藏掉。

<br>

组件的生命周期：

生命周期函数是指在某一个时刻组件会自动调用执行的函数

Mount:
constructor(): constructor构造函数只执行一次，props和state的初始化,以及this绑定
componentWillMount(): 在组件即将被挂载到页面的时刻自动执行
render()： 当组件的state或者props发生改变的时候，它的render函数就会重新执行
componentDidMount(): 组件被挂载到页面之后，自动被执行。（进行ajax请求，事件的绑定）

Update:
componentWillReceiveProps(): 一个组件要从父组件接受参数,如果这个组件第一次存在于父组件中，不会执行,如果这个组件之前已经存在于父组件中，才会执行。
shouldComponentUpdate() : 组件被更新之前，它会自动被执行。返回一个boolean值，true表示组件要更新，false表示组件不要更新。
componentWillUpdate(): 组件被更新之前，它会自动被执行，但是它在shouldComponentUpdate之后,如果shouldComponentUpdate返回true它才执行,如果返回false，这个函数就不会被执行了。
componentDidUpdate(): 组件更新完成之后，它会被执行。

UnMount:
componentWillUnmount(): 当这个组件即将被从页面中剔除的时候，会被执行。 (清除定时器和移出绑定的事件)

<br>
没有Redux：组件之间共享状态比较复杂。
<br>
有Redux:把组件中的数据放到共用的存储区域存储，组件改变数据就不需要传递了，改变store中的数据，其他组件会感知到store中的数据发生改变。组件改变我去修改store中的数据，其他组件再来获取最新的数据。
Redux是数据层框架，是解决组件数据传递的框架。
<br>
Redux工作流：React要改变store中的数据，先要通过store.dispatch(action)派发一个action，传递给store，store再把之前的数据和action转发给reducer，reducer是一个纯函数，它接收到了state和action之后做一些处理，会返回一个新的state给到store，store用这个新的state替换掉之前store中的数据，store数据发生改变的时候，react组件会感知到store发生改变，这个时候它会从store中重新获取数据，更新组件的内容，页面就跟着发生变化了。
<br>
Redux的核心API:

createStore：接收reducer参数，创建store

store.dispatch: 派发action，会传递给store

store.getState: 获取store中所有的数据内容

store.subscribe：订阅store的改变，只要store发生改变subscribe接收的回调函数就会被执行。
<br>
Redux总结：

store是唯一的

只有store能够改变自己的内容

reducer必须是纯函数

reducer 可以接受state，但是绝不能修改state

纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用(对传入的参数进行修改)

<br>

Redux中间件总结：

Redux中间件的中间指的是action和store的中间。

Redux中间件有：redux-thunk和redux-saga。

redux-thunk：可以使actionCreators不仅可以返回对象，还可以返回函数，把异步代码放到actionCreators返回的函数中。

redux-saga：功能强大，有很多api如：takeEvery、put、call、takeLatest。它是将异步代码拆分到单独的sagas.js文件中进行管理。

redux-immutable: 不可修改的State,使用state.getIn(['a', 'b'])读取store中的数据；使用fromJS(x) 将x变成immutable类型的数据。使用state.set('key', value)修改store中的一条数据。使用state.merge({a: a, b: b})修改store中的多条数据。

react页面路由参数的传递 第一种：动态路由 <Link to={'/detail/3'} /> 路由配置Route组件path='/detail/:id'，进入详情页拿到列表页面路由传递的参数: this.props.match.params.id。
第二种： <Link to={'/detail?id=3'} /> 路由配置Route组件path='/detail/'，进入详情页拿到列表页面路由传递的参数: this.props.location.search.split('=')[1]

react组件传入dangerouslySetInnerHTML={{__html: content}}属性，可以使组件内显示的内容不被转义。

<br>

## 文档协议 
> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**teachat** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="wzh" property="cc:attributionName" rel="cc:attributionURL">teachat</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。