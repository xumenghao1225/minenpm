<template>
  <Button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Button>
</template>

<script>
import { Button } from 'element-ui'

export default {
  name: 'CbfButton',
  components: {
    Button
  }
}
</script>