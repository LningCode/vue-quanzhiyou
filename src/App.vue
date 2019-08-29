<template>
  <div id="app">
    <head-nav></head-nav>
    <router-view/>
    <app-footer></app-footer>
    <!-- 返回顶部 -->
    <el-backtop :right="80" :bottom="80" target="#app">
      <div style="{height: 100%;width: 100%;background: #f2f5f6;box-shadow: 0 0 6px rgba(0,0,0, .12);text-align: center;line-height: 40px;color: #1989fa;}">UP</div>
    </el-backtop>
  </div>
</template>

<script>
import HeadNav from "@/views/share/HeadNav";
import AppFooter from "@/views/share/AppFooter";
export default {
  name: 'App',
  components: {
    HeadNav,
    AppFooter
  },
  created() {
    
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/reset.scss";
@import "@/assets/css/common.scss";
@import "@/assets/css/element-variables.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow-x: hidden;
}
</style>
