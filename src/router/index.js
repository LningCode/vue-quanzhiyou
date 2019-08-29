import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import componentsRouter from "@/router/components";
import shareRouter from "@/router/share";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    ...componentsRouter,
    ...shareRouter
  ]
});
