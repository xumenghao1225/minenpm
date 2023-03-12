// 引入button组件 
import CbfButton from './button.vue' 
// 引入elementUI样式 
import 'element-ui/lib/theme-chalk/index.css';

const components = [ CbfButton ]
const install = function (Vue) {   
  // 全局注册所有的组件  
  components.forEach(item => {   Vue.component(item.name, item)   }) 
}
if (typeof window !== 'undefined' && window.Vue) {   
  install(window.Vue) 
} 
// 导出 install （如果作为一个包，一定要有install ！！！） 
export default { install }
export { default as ClickDebounceDirective } from './utils/directives';