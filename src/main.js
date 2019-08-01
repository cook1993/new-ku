import Vue from 'vue'
import App from './App.vue'

// 控制台提示信息  开发环境来提示 详细 一些
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
