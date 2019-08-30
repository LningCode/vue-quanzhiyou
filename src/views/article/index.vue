<template>
  <div class="article-wraper wraper martop-65">
    <el-container>
      <el-main class="note-list">
        <el-carousel trigger="click" height="250px">
          <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
        </el-carousel>
        <el-breadcrumb class="bread-tab" separator="|">
          <el-breadcrumb-item>最热</el-breadcrumb-item>
          <el-breadcrumb-item>最新</el-breadcrumb-item>
        </el-breadcrumb>
        <ul class="entry">
          <li class="item" v-for="item in 5" :key="item">
            <div class="content">
              <router-link class="title" to="/noteDetails">简书一年，我出版了人生第一本书——给想出书的朋友们</router-link>
              <p
                class="abstract"
              >翻看文集，才发现来到简书已经一年了。 第一篇文章发表与2017年7月24日，从那时起，我便开始了在简书定期写作更新的历程。至今总共发布了一百多篇...</p>
              <div class="meta">
                <el-button type="mini" icon="el-icon-view">1242</el-button>
                <el-button type="mini" icon="el-icon-share"></el-button>
              </div>
            </div>
            <a class="wrap-img" href="/">
              <img width="100%" height="100%" src="../../assets/images/logo.png" alt="120" />
            </a>
          </li>
        </ul>
        <div class="load-more">
          <el-button class="btn" type="info" round>加载更多文章</el-button>
        </div>
      </el-main>
      <el-aside class="aside-card">
        <el-card class="box-card">
          <div slot="header">
            <span>热门标签</span>
            <el-button
              @click="$router.push({path:'/tagAll'})"
              style="float:right;padding: 3px 0;"
              type="text"
            >查看全部</el-button>
          </div>
          <div class="clearfix">
            <el-tag
              @click="$router.push({path:'/tagDetails'})"
              class="tag"
              v-for="o in 10"
              :key="o"
              type="info"
            >标签三</el-tag>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.aside-card {
  margin-top: 20px;
  .tag {
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .tag:hover {
    color: #8a4182;
    border-color: #8a4182;
    background-color: #fff;
  }
}
.bread-tab {
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 20px;
}
.note-list {
  padding-right: 45px;
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
}
.load-more {
  padding-top: 30px;
  padding-bottom: 40px;
  text-align: center;
  .btn {
    padding: 12px 80px;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
