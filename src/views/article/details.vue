<template>
  <div class="wraper-pull martop-65">
    <div class="article padtop-45">
      <div class="author">
        <router-link to="/author" class="avatar pull-left">
          <img src="../../assets/images/logo.png" alt />
        </router-link>
        <div class="info">
          <h3 class="name">
            <router-link to="/author">陌上红裙</router-link>
          </h3>
          <p class="meta">
            <span>更新时间 2019-18-12</span>&nbsp;
            <span>阅读 154588</span>&nbsp;
            <span>赞赏 36</span>
          </p>
        </div>
      </div>

      <h1 class="title">简书一年，我找到了一份好工作</h1>

      <div class="content-free">
        <img width="100%" src="../../assets/images/uid.png" alt />
        <p>2017年11月7日 星期二 晴</p>
        <p>说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既没有签约，也没有写出爆文，甚至连一篇像样点的、拿得出手的文字也没有。</p>
        <p>相反，嘲笑和挖苦的话倒是听了不少。当面的，背后的，直接了当的，含沙射影的，比比皆是。</p>
        <p>所有这些，都曾伤透了我的心，我苦恼、彷徨，为自己因为在简书写文而越来越不受人待见而痛苦不堪。</p>
        <img width="100%" src="../../assets/images/video.png" alt />
      </div>
    </div>

    <div class="free-reward">
      <p class="mtea">小礼物走一走，来Quanzy和作者一起学习～</p>
      <el-button @click="dialogVisible = true" size="medium" type="primary" round>赞赏支持作者</el-button>
    </div>

    <div class="foot-free clearfix">
      <el-button
        @click="$router.push({path: '/author'})"
        class="note"
        icon="el-icon-tickets"
      >写作随想：莫名我就喜欢你</el-button>
      <div class="copyright pull-right">
        <el-tooltip content="转载请联系作者获得授权" placement="top">
          <router-link to="/feedback">举报文章 © 著作权归作者所有</router-link>
        </el-tooltip>
      </div>
    </div>

    <div class="el-card marbm-65">
      <div class="el-card__header">相关推荐</div>
      <div class="el-card__body">
        <aeticle-list></aeticle-list>
      </div>
    </div>

    <el-dialog title="支持作者" :visible.sync="dialogVisible" width="50%">
      <img width="100%" src="../../assets/images/logo.png" alt />
    </el-dialog>
  </div>
</template>

<script>
import AeticleList from "@/views/share/AeticleList";
export default {
  data() {
    return { dialogVisible: false };
  },
  components: {
    AeticleList
  },
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
.author {
  margin-bottom: 30px;
  .avatar img {
    display: block;
    width: 68px;
    height: 68px;
    border-radius: 100%;
  }
  .info {
    .name {
      margin-top: 0;
      margin-bottom: 5px;
      padding-top: 10px;
    }
    .meta {
      margin-top: 0;
      margin-bottom: 0;
      color: #999;
    }
    min-height: 68px;
    padding-left: 78px;
  }
}
.article {
  .title {
    margin-bottom: 40px;
    font-size: 32px;
  }
}
.article,
.foot-free {
  margin-bottom: 30px;
}
.free-reward {
  text-align: center;
  padding: 10px 15px 80px;
}
</style>
