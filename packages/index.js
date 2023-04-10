// 引入button组件 
import { directiveButton } from '@/views' 
import { ClickDebounceDirective, draggable } from './utils/directives';
const components = [ directiveButton ]
const install = function (Vue) {   
  // 全局注册所有的组件  
  components.forEach(item => {  console.log(item.name);
     Vue.component(item.name, item)   }) 
}
if (typeof window !== 'undefined' && window.Vue) {   
  install(window.Vue) 
}
// 导出 install （如果作为一个包，一定要有install ！！！） 
export default { 
  install,
  ...components
}
export {
  ClickDebounceDirective,
  draggable
}