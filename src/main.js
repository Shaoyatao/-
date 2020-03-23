/* 入口js */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from "mint-ui"


import "./mock/mockServer"
import VueLazyload from "vue-lazyload"; //加载mock
import loading from './common/imgs/loading.gif'

import './filters'
//注册全局button
Vue.component(Button.name,Button);  //<mt-button>
Vue.use(VueLazyload,{
  loading
})
new Vue({
  el: "#app",
  // runtiome-only中：render渲染函数
  // runtiome-compiler中：template和component
  render: h => h(App),
  router,
  store,
})
