import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "首页",
    component: () => import("~/views/index.vue"),
    children: [
      {
        path: 'directives',
        name: 'directives',
        component: () => import("~/views/directives/index.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
