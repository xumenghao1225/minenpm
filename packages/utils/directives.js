import { debounce } from 'lodash';
/** 
 * @description: 限制多少秒内只能点击一次, 默认是3000ms
 * @example v-ClickDebounceDirective="3000"
 */
export const ClickDebounceDirective = {
  bind(el, binding) {
    let isClicked = false;
    const debounceTime = binding.arg ? parseInt(binding.arg, 10) : 1000;
    const debouncedClickHandler = debounce(() => {
      if (!isClicked) {
        isClicked = true;
        binding.value();
        setTimeout(() => {
          isClicked = false;
        }, debounceTime);
      }
    }, debounceTime, { leading: true, trailing: false });
    el.addEventListener('click', debouncedClickHandler);
    el._clickDebounceHandler = debouncedClickHandler;
    el._clickDebounceTime = debounceTime;
  },
  unbind(el) {
    el.removeEventListener('click', el._clickDebounceHandler);
    delete el._clickDebounceHandler;
    delete el._clickDebounceTime;
  },
  update(el, binding) {
    if (binding.arg && parseInt(binding.arg, 10) !== el._clickDebounceTime) {
      const debounceTime = parseInt(binding.arg, 10);
      el.removeEventListener('click', el._clickDebounceHandler);
      const debouncedClickHandler = debounce(() => {
        if (!isClicked) {
          isClicked = true;
          binding.value();
          setTimeout(() => {
            isClicked = false;
          }, debounceTime);
        }
      }, debounceTime, { leading: true, trailing: false });
      el.addEventListener('click', debouncedClickHandler);
      el._clickDebounceHandler = debouncedClickHandler;
      el._clickDebounceTime = debounceTime;
    }
  },
};
