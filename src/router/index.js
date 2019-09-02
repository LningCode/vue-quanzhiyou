import Vue from "vue";
import Router from "vue-router";
import componentsRouter from "@/router/components";
const importView = file => () => import("@/views/" + file + ".vue");

/**
 * 解决router-link点击错误问题
 * NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
 */
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Article",
      component: importView("article/index")
    },
    {
      path: "/feedback",
      name: "问题反馈",
      component: importView("share/feedback")
    },
    {
      path: "/author",
      name: "我的个人资料",
      component: importView("share/author")
    },
    ...componentsRouter
  ]
});
