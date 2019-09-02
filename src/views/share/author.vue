<template>
  <div class="wraper martop-65">
    <el-container>
      <el-aside class="martop-20 marbm-20">
        <el-card shadow="never" class="mem-area">
          <img class="head" src="../../assets/images/video.png" alt />
          <h3>热鸡</h3>
          <div class>
            <el-button @click="$router.push({path: '/author'})" icon="el-icon-chat-dot-round">给作者留言</el-button>
            <el-button icon="el-icon-user-solid">
              <a class="GitHub" target="_blank" href="https://github.com/LningCode">GitHub</a>
            </el-button>
          </div>
          <p class="referral">用户管理用户管理用户管理用户管理</p>
        </el-card>
      </el-aside>
      <el-main>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="个人简历" name="first">没有信息～</el-tab-pane>
          <el-tab-pane label="作品集" name="second">没有信息～</el-tab-pane>
          <el-tab-pane label="动态新闻" name="third">没有信息～</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">没有信息～</el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return { activeName: "first" };
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.mem-area {
  text-align: center;
  .head {
    width: 120px;
    height: 120px;
    display: block;
    border-radius: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .referral {
    margin-bottom: 0;
    color: #999;
    text-align: left;
  }
  .GitHub {
    color: #606266;
  }
  .GitHub:hover {
    color: #409eff;
    text-decoration: none;
  }
}
</style>
