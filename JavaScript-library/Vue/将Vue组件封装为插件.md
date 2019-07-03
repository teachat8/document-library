将Vue组件封装为插件
===

> create by **teachat** on **2019-7-3 14:13:36**   
> Recently revised in **2019-7-3 14:37:21**

最近在用Vue-cli2.x 开发项目，项目中有些组件在很多场景下都会用到，如果作为组件使用，则每个用到的地方都需要引入、注册等操作；如果把组件封装成插件，并在项目的入口文件main.js中使用插件（Vue.use(myPlugin)），则在整个应用中即可随处调用。

### 具体如下：

1. 首先编写组件：
```javascript
<!-- FieldInput.vue组件 -->
<template>
  <div class="box">
    <div class="label" v-show="label">{{label}}</div>
    <div class="rightline" v-show="label"></div>
    <div v-show="name" class="name">{{name}}</div>
    <div class="inputContainer">
      <input placeholder="请输入" class="input" type="text" :value="value" @input="handleModelInput" :disabled="disabled"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fieldInput',
  props: {
    value: String,
    label: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'update:value'
  },
  methods: {
    handleModelInput (e) {
      if (!this.disabled) {
        this.$emit('update:value', e.target.value)
      }
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  height: 81px;
  align-items: center;
}
.rightline {
  width: 1px;
  height: 22px;
  background: rgba(232, 232, 232, 1);
}
.label {
  display: flex;
  width: 247px;
  padding: 0px 0px 0px 24px;
  font-size: 24px;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.name {
  display: flex;
  padding: 0px 0px 0px 24px;
  font-size: 24px;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.input {
  width: 100%;
  font-size: 24px;
  border: none;
  outline: medium;
  margin: 2px 0px;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 22px;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 22px;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 22px;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 22px;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}
.inputContainer {
  height: 100%;
  display: flex;
  justify-items: center;
  flex: 1;
  padding-left: 20px;
  border-bottom: #e8e8e8 2px solid;
  margin-right: 24px;
}
</style>
```

下面我们来封装一下该组件：

```javascript
// FieldInput.js
//引入组件
import fieldInput from '@/components/field-input/FieldInput'
export default {
  install: (Vue) => {
    //全局注册组件
    Vue.component('field-input', fieldInput)
  }
}
```

下一步就是去入口文件main.js里引入插件了

```javascript
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入插件
import components from '@/components'
// 使用插件
Vue.use(components)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

最后在组件中全局调用即可
```javascript
<template>
  <div>
    <div v-for="(item,index) in data" :key="`a${index}`">
      <field-input
        v-model="item.value"
        :label="item.key"
        :disabled="(index<2||index>4) ?true:disabled"
      />
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>

```


## 文档协议 
> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**teachat** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="wzh" property="cc:attributionName" rel="cc:attributionURL">teachat</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。