import { debounce } from 'lodash/debounce';
/** 
 * @description: 限制多少秒内只能点击一次, 默认是3000ms
 * @example v-ClickDebounceDirective="3000"
 */
export const ClickDebounceDirective = {
  bind: function(el, binding) {
    console.log(binding)
    function clickHandler(e) {
      if (el.contains(e.target)) {
        if (!el.disabled) {
          el.disabled = true;
          setTimeout(() => {
            el.disabled = false;
          }, binding.value || 3000);
        }
        return false;
      }
    }

    el.bffClick = clickHandler;
    document.addEventListener("click", clickHandler);
  },
  unbind(el) {
    document.removeEventListener("click", el.bffClick);
    delete el.bffClick;
  }
};
