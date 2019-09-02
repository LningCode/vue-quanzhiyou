<template>
  <div id="app">
    <head-nav></head-nav>
    <router-view />
    <app-footer></app-footer>
    <!-- 返回顶部 -->
    <el-backtop class="backtop" :right="80" :bottom="120" target="#app">
      <el-tooltip class="item" effect="dark" content="回到顶部" placement="left-start">
        <el-button class="arrow-up" icon="el-icon-arrow-up"></el-button>
      </el-tooltip>
    </el-backtop>
    <el-tooltip class="item" effect="dark" content="给作者留言" placement="left-start">
      <el-button
        @click="$router.push({path: '/feedback'})"
        class="mail-message"
        type="info"
        icon="el-icon-message"
        circle
      ></el-button>
    </el-tooltip>
  </div>
</template>

<script>
import HeadNav from "@/views/share/HeadNav";
import AppFooter from "@/views/share/AppFooter";
export default {
  name: "App",
  components: {
    HeadNav,
    AppFooter
  },
  created() {}
};
</script>

<style lang='scss'>
@import "@/assets/css/reset.scss";
@import "@/assets/css/common.scss";
@import "@/assets/css/element-variables.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow-x: hidden;
}
.backtop {
  width: 45px;
  height: 45px;
  .arrow-up {
    font-size: 18px;
    border: none;
    background: none;
  }
}
.mail-message {
  position: absolute;
  bottom: 60px;
  right: 80px;
  width: 45px;
  height: 45px;
}
.mail-message .el-icon-message {
  font-size: 24px;
}
</style>
