<template>
  <div class="headnav">
    <el-menu
      class="headnav-menu"
      router
      :default-active="activeIndex"
      mode="horizontal"
      text-color="#8A4182"
    >
      <el-menu-item class="logo">
        <img width="50" src="../../assets/images/logo.png" alt />
      </el-menu-item>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/video">视频</el-menu-item>
      <el-menu-item index="/answers">问答</el-menu-item>
      <el-menu-item index="/resource">资源</el-menu-item>
      <el-menu-item class="menu-search">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="文章">
            <el-option label="视频" value="1"></el-option>
            <el-option label="文章" value="2"></el-option>
            <el-option label="问答" value="3"></el-option>
          </el-select>
          <el-button class="icon-search" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu-item>
      <el-menu-item index="/login?type=up" class="pull-right">
        <el-button type="primary" size="medium" round>注册</el-button>
      </el-menu-item>
      <el-menu-item index="/login?type=in" class="pull-right">登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HelloHeader",
  data() {
    return {
      activeIndex: "/",
      input5: "",
      select: ""
    };
  },
  methods: {},
  created() {
    const hash = location.hash;
    const path = hash.substring(1, hash.length);
    this.activeIndex = path;
  }
};
</script>

<style scoped>
.logo {
  margin-right: 20px;
}
.menu-search .icon-search {
  padding: 9px 4px;
  vertical-align: baseline;
}
.headnav-menu {
  border-bottom: none;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}
.headnav {
  border-bottom: solid 1px #e6e6e6;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.headnav-menu .el-menu-item {
  font-size: 16px;
}
</style>
