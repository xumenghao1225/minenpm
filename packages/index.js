// 引入button组件 
import CbfButton from '@/views/buttons/button.vue' 

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
import { ClickDebounceDirective, draggable } from './utils/directives';
export {
  ClickDebounceDirective,
  draggable
}