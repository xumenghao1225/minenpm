<template>
  <Button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Button>
</template>

<script lang="ts">
import { Button } from 'element-ui'
import { Vue, Component } from "vue-property-decorator"
@Component({
  name: 'Cbfbutton',
  components: { Button }
})
export default class Cbfbutton extends Vue {
  name="Cbfbutton";
  mounted() {
    debugger
    console.log("Cbfbutton", Cbfbutton.name);
  }
}
</script>