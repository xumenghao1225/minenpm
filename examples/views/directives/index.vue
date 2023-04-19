<template>
	<div>
		<CodeBox filename="directives">
			<template #source>
				<directiveButton type="primary" @click="DirectiveClick">Directive</directiveButton>
				<Button type="primary" @click="normalClick">Normal</Button>
			</template>
			<template> 指令源码 </template>
		</CodeBox>
	</div>
</template>

<script>
import { Button, Message } from "element-ui";
import { CodeBox } from "~/components";
import { directiveButton } from "@/views";
import { generateHtmlBymd } from "~/utils/md2html";
import { Component, Vue } from "vue-property-decorator";
@Component({
	name: "Directives",
	components: {
		Button,
		CodeBox,
		directiveButton,
	},
})
export default class Directives extends Vue {
	DirectiveClick() {
		Message.info("Directives Click");
	}

	normalClick() {
		Message.info("Normal Click");
	}
	async generateHtml() {
		generateHtmlBymd;
	}
	get code() {
		return `
      DirectiveClick(){
        Message.info("Directives Click");
      }

      normalClick(){
        Message.info("Normal Click");
      }
    `;
	}
}
/* 

    

*/
</script>
