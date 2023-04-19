<template>
	<div class="demo-block" :class="[{ hover: hovering }]" @mouseenter="hovering = true" @mouseleave="hovering = false">
		<div class="source">
			<slot name="source"></slot>
		</div>
		<div class="meta" ref="meta">
			<div class="description" v-if="$slots.default">
				<slot></slot>
			</div>
			<div class="highlight">
				<slot name="highlight">
					<!-- <div v-html="md.render(content)"></div> -->
				</slot>
			</div>
		</div>
		<div class="demo-block-control" ref="control" :class="{ 'is-fixed': fixedControl }" @click="isExpanded = !isExpanded">
			<transition name="arrow-slide">
				<i :class="[iconClass, { hovering: hovering }]"></i>
			</transition>
			<transition name="text-slide">
				<span v-show="hovering">{{ controlText }}</span>
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import { Link, Tooltip, Button } from "element-ui";
import "./index.scss";
// import md from "./container"
// console.log(md.render(`# ~/md/directives.md`))
// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);
// import { generateHtmlBymd } from '../../utils/md2html'

import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import fs from "fs";
import path from "path";
import { Vue, Component, Prop, Ref, Watch } from "vue-property-decorator";
@Component({
	name: "CodeBox",
	components: {
		Link,
		Tooltip,
		Button,
	},
})
export default class CodeBox extends Vue {
	@Prop({ default: "" }) readonly filename!: string;
	hovering = false;
	isExpanded = true;
	scrollParent: any = null;
	fixedControl = false;
	md = null;
	@Ref("meta") readonly meta!: HTMLElement;
	@Ref("control") readonly control!: HTMLElement;

	get iconClass() {
		return this.isExpanded ? "el-icon-caret-top" : "el-icon-caret-bottom";
	}

	get controlText() {
		return this.isExpanded ? "隐藏代码" : "显示代码";
	}
	get codeArea() {
		return this.$el.getElementsByClassName("meta")[0] as HTMLElement;
	}

	get codeAreaHeight() {
		if (this.$el.getElementsByClassName("description").length > 0) {
			return (
				this.$el.getElementsByClassName("description")[0].clientHeight +
				this.$el.getElementsByClassName("highlight")[0].clientHeight +
				20
			);
		}
		return this.$el.getElementsByClassName("highlight")[0].clientHeight;
	}
	@Watch("isExpanded")
	isExpandedHandler(val: boolean) {
		this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : "0";
		if (!val) {
			this.fixedControl = false;
			this.control.style.left = "0";
			this.removeScrollHandler();
			return;
		}
		setTimeout(() => {
			this.scrollParent = document.querySelector(".page-component__scroll > .el-scrollbar__wrap");
			this.scrollParent && this.scrollParent.addEventListener("scroll", this.scrollHandler);
			this.scrollHandler();
		}, 200);
	}

	scrollHandler() {
		const { top, bottom, left } = this.meta.getBoundingClientRect();
		this.fixedControl = bottom > document.documentElement.clientHeight && top + 44 <= document.documentElement.clientHeight;
		this.control.style.left = this.fixedControl ? `${left}px` : "0";
	}

	removeScrollHandler() {
		this.scrollParent && this.scrollParent.removeEventListener("scroll", this.scrollHandler);
	}
	created() {
		// this.md = new MarkdownIt({
		// 	highlight: function (code: any, lang: any) {
		// 		if (lang && hljs.getLanguage(lang)) {
		// 			return `<pre class="hljs"><code>${hljs.highlight(lang, code, true).value}</code></pre>`;
		// 		} else {
		// 			return `<pre class="hljs"><code>${this.md.utils.escapeHtml(code)}</code></pre>`;
		// 		}
		// 	},
		// });
	}
	mounted() {
		this.$nextTick(() => {
			let highlight = this.$el.getElementsByClassName("highlight")[0] as HTMLElement;
			if (this.$el.getElementsByClassName("description").length === 0) {
				highlight.style.width = "100%";
				highlight.style.borderRight = "none";
			}
		});
	}
	// async generateHtml(){
	// 	if(this.filename){
	// 		const html = await this.generateHtmlBymd(this.filename)
	// 		return html
	// 	}
	// 	else return ""
	// }
	beforeDestroy() {
		this.removeScrollHandler();
	}

	// generateHtmlBymd(filename:string, suffix=".md") {
	// 	// 创建 markdown-it 实例
	// 	const md = new MarkdownIt();
	// 	return new Promise<string>((resolve)=>{
	// 		const mdFilesDir = `../../md/`; // Markdown 文件所在的目录
	// 		// const absolutePath = path.resolve(__dirname, mdFilesDir);
	// 		// console.log(absolutePath)
	// 		fs.readdir(mdFilesDir, (err, files) => {
	// 			console.log(files)
	// 			if (err) throw err;
	// 			const mdFiles = files.filter((file)=> file === filename+suffix)
	// 			if(mdFiles.length > 0){
	// 				const mdContent = fs.readFileSync(`${mdFilesDir}/${mdFiles[0]}`, 'utf8');
	// 				const htmlContent = md.render(mdContent) as string;
	// 				resolve(htmlContent)
	// 				return false
	// 			}
	// 			resolve("")
	// 		});
	// 	})
	// }
}
</script>
