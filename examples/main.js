import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* 
  1. import package
  import hsyCommon, { directiveButton } from "../dist/hsyCommon.umd.min"
  2. Use
  Vue.use({hsyCommon})
  3. global components
  */
import { directiveButton, ClickDebounceDirective } from "../packages/index"
Vue.directive("ClickDebounceDirective", ClickDebounceDirective)
Vue.component("directiveButton", directiveButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')