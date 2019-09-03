<template>
  <div class="wraper martop-65">
    <el-container>
      <el-main class="side-main">
        <div class="wenda-info marbm-40">
          <h1 class="wenda-title">与大咖交流前端JS与框架开发，免费赢取前端图书</h1>
          <div class="detail-tips clearfix">
            <div class="label-box pull-left">
              <router-link to="/tagDetails" class="marle-10">AngularJS</router-link>
              <router-link to="/tagDetails" class="marle-10">Html/CSS</router-link>
              <router-link to="/tagDetails">JavaScript</router-link>
            </div>
            <div class="author-info pull-right">
              <router-link class="author" to="/author">慕女神</router-link>
              <span>2017-11-28 15:39:04</span>
            </div>
          </div>
        </div>

        <article class="wenda-article">
          <p>
            前端开发并不简单，哪怕对于初级甚至中级的前端开发者来说，
            <br />
          </p>
          <p>即使他们有一定的JavaScript代码功底，</p>
          <p>如果单纯交代他们实现一个前端功能，他们可能也可以实现出来，</p>
          <p>但他们的实现风格要么乱七八糟，要么“随心所欲”。</p>
        </article>

        <quill-editor class="padtop-65"></quill-editor>

        <div class="replay-wrap padtop-65">
          <el-card class="martop-20">
            <div slot="header" class="clearfix">
              <h2 class="section-tit">
                最新回答
                <span>(2条回答)</span>
              </h2>
            </div>
            <div class="answer_item marbm-20">
              <ul>
                <li class="card-item" v-for="item in 5" :key="item">
                  <router-link to="/author" class="author">
                    <img src="../../assets/images/logo.png" alt />
                  </router-link>
                  <div class="card-content">
                    <div class="card-abstract">13小时之前 回答</div>
                    <h3 class="card-title">翻看文集，才发现来到简书已经一年了。 第一篇文章发表与20</h3>
                    <div class="meta">
                      <el-button type="mini" icon="el-icon-view">42赞同</el-button>
                      <el-button type="mini" icon="el-icon-share">11反对</el-button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <pag-ination :total="20" :pageSize="5"></pag-ination>
          </el-card>
        </div>
      </el-main>

      <el-aside class="martop-20 marbm-20 side-alert">
        <el-card shadow="never">
          <div class="detail-info clearfix">
            <div class="card pull-left">
              <span class="sum">158</span>
              <span>回答数</span>
            </div>
            <div class="card pull-right">
              <span class="sum">158</span>
              <span>浏览数</span>
            </div>
          </div>
          <el-button size="medium" class="side-btn" type="primary">我要回答</el-button>
        </el-card>

        <el-card class="martop-20">
          <div slot="header" class="clearfix">
            <span class="user-title">相关问题</span>
          </div>
          <ul class="entry">
            <li class="card-item" v-for="item in 5" :key="item">
              <div class="card-content">
                <h4 class="card-title">简书一年，我</h4>
                <div class="card-abstract">10个回答</div>
              </div>
            </li>
          </ul>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import PagInation from "@/components/PagInation";
import QuillEditor from "@/components/QuillEditor";
export default {
  data() {
    return {};
  },
  components: {
    PagInation,
    QuillEditor
  }
};
</script>

<style scoped lang="scss">
.side-main {
  padding-left: 0;
  .wenda-title {
    margin-bottom: 10px;
  }
  .detail-tips {
    font-size: 15px;
  }
}
.side-alert {
  .detail-info {
    margin-bottom: 20px;
    padding-top: 10px;
    .card {
      width: 50%;
      text-align: center;
      span {
        color: #999;
        font-size: 13px;
      }
      .sum {
        display: block;
        font-size: 20px;
        font-weight: bold;
        line-height: 20px;
        color: #333;
        margin-bottom: 5px;
      }
    }
  }
  .side-btn {
    width: 100%;
    font-size: 15px;
  }
}
.card-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  .card-title {
    margin-top: 0;
    margin-bottom: 5px;
    line-height: 16px;
  }
  .card-abstract {
    font-size: 13px;
    color: #666;
    margin: 0;
  }
  .content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
}
.replay-wrap {
  .section-tit {
    margin: 0;
    span {
      color: #999;
      font-size: 14px;
      margin-left: 10px;
      line-height: 14px;
    }
  }
  .author {
    width: 70px;
    height: 70px;
    display: block;
    margin-right: 20px;
    img {
      display: block;
      width: 100%;
    }
  }
  .card-title {
    line-height: 22px;
    margin-bottom: 15px;
  }
  .card-abstract {
    margin-bottom: 8px;
  }
  .card-item {
    padding: 15px 0;
  }
}
</style>
