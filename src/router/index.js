import Vue from "vue";
import Router from "vue-router";
import AppHome from "@/components/AppHome";
import componentsRouter from "@/router/components";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "AppHome",
      component: AppHome,
      children: [
        {
          path: "/article",
          name: "Article",
          component: () => import("@/views/article/index")
        }
      ]
    },
    ...componentsRouter
  ]
});
