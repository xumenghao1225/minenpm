/** 
 * @description: 限制多少秒内只能点击一次, 默认是3000ms
 * @example v-ClickDebounceDirective="3000"
 */
export const ClickDebounceDirective = {
  bind: function(el, binding) {
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

export const draggable = {
  inserted: function (el) {
    el.style.cursor = 'move'
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft;
      let disy = e.pageY - el.offsetTop;
      document.onmousemove = function (e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX = document.body.clientWidth - parseInt(window.getComputedStyle(el).width)
        let maxY = document.body.clientHeight - parseInt(window.getComputedStyle(el).height)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + 'px';
        el.style.top = y + 'px';

      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      }
    }
  }
}