const importView = file => () => import("@/views/" + file + ".vue");
const componentsRouter = [
  {
    path: "/login",
    name: "Login",
    component: importView("login/index")
  },
  {
    path: "/tos",
    name: "服务条款",
    component: importView("login/tos")
  },
  {
    path: "/privacy",
    name: "隐私政策",
    component: importView("login/privacy")
  },
  {
    path: "/forgot",
    name: "找回密码",
    component: importView("login/forgot")
  },
  {
    path: "/video",
    name: "视频",
    component: importView("video/index")
  },
  {
    path: "/answers",
    name: "问答",
    component: importView("answers/index")
  },
  {
    path: "/resource",
    name: "资源",
    component: importView("resource/index")
  },
  {
    path: "/noteDetails",
    name: "文章详情",
    component: importView("article/details")
  },
  {
    path: "/tagAll",
    name: "标签列表",
    component: importView("article/TagAll")
  },
  {
    path: "/tagDetails",
    name: "标签详情",
    component: importView("article/TagDetails")
  }
];

export default componentsRouter;
