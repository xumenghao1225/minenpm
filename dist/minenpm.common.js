module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"00fd":function(t,e,n){var r=n("9e69"),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}},"0fae":function(t,e,n){},1310:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},"1a8c":function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},"29f3":function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},"2b3e":function(t,e,n){var r=n("585a"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},3729:function(t,e,n){var r=n("9e69"),o=n("00fd"),i=n("29f3"),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},"408c":function(t,e,n){var r=n("2b3e");t.exports=function(){return r.Date.now()}},"4cef":function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},"585a":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("c8ba"))},"8d74":function(t,e,n){var r=n("4cef"),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},"9e69":function(t,e,n){var r=n("2b3e").Symbol;t.exports=r},b047:function(t,e,n){var r=n("1a8c"),o=n("408c"),i=n("b4b0"),u=Math.max,c=Math.min;t.exports=function(t,e,n){var f,a,s,l,d,p,v=0,b=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(e){var n=f,r=a;return f=a=void 0,v=e,l=t.apply(r,n)}function h(t){return v=t,d=setTimeout(_,e),b?x(t):l}function j(t){var n=t-p;return void 0===p||n>=e||n<0||y&&t-v>=s}function _(){var t=o();if(j(t))return g(t);d=setTimeout(_,function(t){var n=e-(t-p);return y?c(n,s-(t-v)):n}(t))}function g(t){return d=void 0,m&&f?x(t):(f=a=void 0,l)}function w(){var t=o(),n=j(t);if(f=arguments,a=this,p=t,n){if(void 0===d)return h(p);if(y)return clearTimeout(d),d=setTimeout(_,e),x(p)}return void 0===d&&(d=setTimeout(_,e)),l}return e=i(e)||0,r(n)&&(b=!!n.leading,s=(y="maxWait"in n)?u(i(n.maxWait)||0,e):s,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==d&&clearTimeout(d),v=0,f=p=a=d=void 0},w.flush=function(){return void 0===d?l:g(o())},w}},b4b0:function(t,e,n){var r=n("8d74"),o=n("1a8c"),i=n("ffd6"),u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):u.test(t)?NaN:+t}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"ClickDebounceDirective",(function(){return u})),"undefined"!=typeof window){var r=window.document.currentScript,o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}var i=function(t,e,n,r,o,i,u,c){var f,a="function"==typeof t?t.options:t;if(e&&(a.render=e,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},a._ssrRegister=f):o&&(f=c?function(){o.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:o),f)if(a.functional){a._injectStyles=f;var s=a.render;a.render=function(t,e){return f.call(e),s(t,e)}}else{var l=a.beforeCreate;a.beforeCreate=l?[].concat(l,f):[f]}return{exports:t,options:a}}({},void 0,void 0,!1,null,null,null).exports;n("0fae"),n("b047");const u={bind:function(t,e){function n(n){if(t.contains(n.target))return t.disabled||(t.disabled=!0,setTimeout(()=>{t.disabled=!1},e.value||3e3)),!1}t.bffClick=n,document.addEventListener("click",n)},unbind(t){document.removeEventListener("click",t.bffClick),delete t.bffClick}},c=[i],f=function(t){c.forEach(e=>{t.component(e.name,e)})};"undefined"!=typeof window&&window.Vue&&f(window.Vue);var a={install:f};e.default=a},ffd6:function(t,e,n){var r=n("3729"),o=n("1310");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}}});