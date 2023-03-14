<template>
  <div id="app">
    <cbf-button v-ClickDebounceDirective="3000" type="primary" @click="handleSubmit" icon="el-icon-search">按钮2</cbf-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleSubmit () {
      console.log('123')
    }
  }
}
</script>

<style lang="scss">

</style>