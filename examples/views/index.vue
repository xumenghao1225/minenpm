<template>
  <div>
    <div class="topbar">
      <RadioGroup v-model="selected" size="large">
        <RadioButton :label="item.path" v-for="(item, index) in menus" :key="index">{{item.name}}</RadioButton>
      </RadioGroup>
    </div>
    
    <div class="view">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import { routes } from "../router/index"
import { RadioButton, RadioGroup } from "element-ui"
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({
  name: "Layout",
  components: {
    RadioButton, RadioGroup
  }
})
export default class Layout extends Vue {
  selected = '';
  get menus(){
    const filterRoutes = routes[0].children.filter(({ meta = {} }) => meta.hide !== true)
    return filterRoutes.map(({ name, path }) => {
      return {
        path: `/${path}`,
        name
      }
    })
  }
  @Watch("selected")
  handlerSelected(path){
    if (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style scoped>
  .view{
    min-height: calc(100% - 300px);
    margin-top:80px;
    border: 1px solid #eee;
  }
  .topbar{
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    margin: 0 20px;
    position: fixed;
  }
</style>
