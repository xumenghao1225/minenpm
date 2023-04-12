// 引入button组件
import { directiveButton } from "@/views";
const components = [directiveButton];
import { ClickDebounceDirective, draggable } from "./utils/directives";
import Vue from "vue";
const install = function (Vue) {
	/// 判断是否安装
	if (install.installed) return;
	// 遍历注册全局组件
	components.map((component) => Vue.component(component.name, component));
};
if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}

const result = components.reduce((accumulator, current) => {
	accumulator[current.name] = current;
	return accumulator;
}, {});

// 导出 install （如果作为一个包，一定要有install ！！！）
export default {
	install,
	...result,
};
export { ClickDebounceDirective, draggable, directiveButton };
