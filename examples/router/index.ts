import Vue from "vue";
import VueRouter from "vue-router";
import type { RouteConfig } from "vue-router";

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
      },
      {
        path: 'exportexcel',
        name: '前端导出excel',
        component: () => import("~/views/exportexcel/index.vue"),
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
