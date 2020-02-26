/* 入口js */
import Vue from 'vue'
import App from './App'

new Vue({
    el: "#app",
    // runtiome-only中：render渲染函数 
    // runtiome-compiler中：template和component 
    render: h => h(App)
})