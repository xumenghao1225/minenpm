<template>
	<Button v-ClickDebounceDirective v-bind="$attrs" v-on="$listeners">
		<slot></slot>
	</Button>
</template>

<script lang="ts">
import { Button } from "element-ui";
import { Vue, Component } from "vue-property-decorator";
@Component({
	name: "directiveButton",
	components: { Button },
})
export default class directiveButton extends Vue {}
</script>
