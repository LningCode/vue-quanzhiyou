import Vue from "vue";
import Router from "vue-router";
import componentsRouter from "@/router/components";

/**
 * 解决router-link点击错误问题
 * NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
 */
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Article",
      component: () => import("@/views/article/index")
    },
    ...componentsRouter
  ]
});
