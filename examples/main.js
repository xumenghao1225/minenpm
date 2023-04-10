import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 将组件包引入
import { ClickDebounceDirective } from '../packages/index.js'

Vue.config.productionTip = false
// 使用组件
Vue.directive('ClickDebounceDirective', ClickDebounceDirective)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')