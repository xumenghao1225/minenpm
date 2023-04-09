/* eslint-disable  no-console  */
/* eslint-disable  no-extra-semi  */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ClickDebounceDirective } from '@/utils/directives';
// 将组件包引入
// import CbfUI from '../packages'

Vue.directive('ClickDebounceDirective', ClickDebounceDirective)
Vue.config.productionTip = false
// 使用组件
// Vue.use(CbfUI)
// Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')