<template>
  <div>
    <div class="bread-tab">
      <el-button class="active">最热</el-button>
      <el-button>最新</el-button>
    </div>

    <ul class="entry">
      <li class="item" v-for="item in 5" :key="item">
        <div class="content">
          <router-link class="title" to="/noteDetails">简书一年，我出版了人生第一本书——给想出书的朋友们</router-link>
          <p
            class="abstract"
          >翻看文集，才发现来到简书已经一年了。 第一篇文章发表与2017年7月24日，从那时起，我便开始了在简书定期写作更新的历程。至今总共发布了一百多篇...</p>
          <div class="meta">
            <el-button
              @click="$router.push({path: '/author'})"
              type="mini"
              icon="el-icon-user-solid"
            >热鸡</el-button>
            <el-button type="mini" icon="el-icon-view">1242</el-button>
            <el-button type="mini" icon="el-icon-share"></el-button>
          </div>
        </div>
        <router-link class="wrap-img" to="/noteDetails">
          <img width="100%" height="100%" src="../../assets/images/logo.png" alt="120" />
        </router-link>
      </li>
    </ul>
    <div class="load-more">
      <el-button class="btn" type="info" round>加载更多文章</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
.bread-tab {
  padding-top: 20px;
  padding-bottom: 20px;
  .active {
    color: #8a4182;
    border: 1px solid #8a4182;
  }
}
.item {
  border-top: 1px solid #ebeef5;
  display: flex;
  align-items: center;
  padding: 20px 0;
}
.item:last-child {
  border-bottom: none;
}
.content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.title {
  color: #333;
  font-size: 18px;
  font-weight: bold;
}
.abstract {
  color: #999;
}
.wrap-img {
  flex: 0 0 auto;
  width: 150px;
  height: 100px;
  margin-left: 15px;
  background-color: #fff;
  border-radius: 2px;
}
.load-more {
  padding-top: 30px;
  padding-bottom: 40px;
  text-align: center;
  .btn {
    padding: 12px 80px;
  }
}
</style>
