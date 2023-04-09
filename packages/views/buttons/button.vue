<template>
  <Button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Button>
</template>

<script lang="ts">
import { Button } from 'element-ui'
import { Vue, Component } from "vue-property-decorator"
@Component({
  name: 'CbfButton',
  components: { Button }
})
export default class CbfButton extends Vue {
  name="CbfButton";
}
</script>