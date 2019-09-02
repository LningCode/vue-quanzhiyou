<template>
  <div class="wraper martop-65 padtop-20">
    <el-card class="form-search" shadow="never">
      <el-container>
        <el-input size="medium" placeholder="快速搜索想要知道的问题" v-model="formInline">
          <el-button slot="append" @click="onSubmit" icon="el-icon-search">搜索问题</el-button>
        </el-input>
        <el-button class="marle-20" size="medium" type="primary" round icon="el-icon-question">我要提问</el-button>
      </el-container>
    </el-card>

    <el-container>
      <el-main class="side-main">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">最新问答</el-menu-item>
          <el-menu-item index="2">热门问答</el-menu-item>
          <el-submenu index class="pull-right">
            <template slot="title">{{slotTitle}}</template>
            <el-menu-item @click="selectSlot('按时间排序')">按时间排序</el-menu-item>
            <el-menu-item @click="selectSlot('按回答数排序')">按回答数排序</el-menu-item>
          </el-submenu>
        </el-menu>

        <div class="side-body marbm-20">
          <ul class="entry martop-10">
            <li class="card-item" v-for="item in 20" :key="item">
              <div class="item-num">
                <el-button class="has-answer answer" @click="$router.push({path: '/wenda'})">
                  <span class="sum">{{23 + item}}</span>
                  <span class="text">{{item == 3 ? '已解决' : '回答'}}</span>
                </el-button>
                <el-button @click="$router.push({path: '/wenda'})" class="has-answer">
                  <span class="sum">{{32 + item}}</span>
                  <span class="text">浏览数</span>
                </el-button>
              </div>
              <div class="card-content">
                <router-link
                  class="card-name"
                  to="/wenda"
                  title="各位猿或者媛，一般几点睡啊。有时忍住头痛看java到很晚"
                >各位猿或者媛，一般几点睡啊。有时忍住头痛看java到很晚</router-link>
                <div class="card-abstract">
                  标签：
                  <span>AngularJS</span>
                  <span>Html/CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <pag-ination class="marbm-20" :total="20" :pageSize="5"></pag-ination>
      </el-main>

      <el-aside class="martop-20 marbm-20 side-alert">
        <el-card shadow="never">
          <h3 class="title">试试提问你今天遇到的问题～</h3>
          <el-button size="medium" class="side-btn" type="primary">我要提问</el-button>
        </el-card>

        <el-card class="martop-20">
          <div slot="header" class="clearfix">
            <span class="user-title">活跃用户</span>
          </div>
          <ul class="entry">
            <li class="card-item" v-for="item in 5" :key="item">
              <router-link class="wrap-img" to="/noteDetails">
                <img width="100%" height="100%" src="../../assets/images/logo.png" alt="120" />
              </router-link>
              <div class="card-content">
                <h4 class="card-title">简书一年，我</h4>
                <p class="card-abstract">翻看文集，才发现来到简</p>
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
export default {
  name: "AppAnswers",
  data() {
    return {
      formInline: "",
      activeIndex: "1",
      slotTitle: "按时间排序"
    };
  },
  components: {
    PagInation
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.formInline);
    },
    handleSelect(key, keyPath) {
      if (!key) return;
      console.log(key, keyPath);
    },
    selectSlot(name) {
      this.slotTitle = name;
    }
  }
};
</script>

<style scoped lang="scss">
.form-search {
}
.side-main {
  padding-left: 0;
  .card-item {
    border-bottom: solid 1px #e6e6e6;
    padding: 15px 0;
    .item-num {
      min-width: 114px;
    }
    .card-name {
      color: #333;
      font-size: 16px;
      font-weight: bold;
    }
    .card-abstract {
      margin-top: 6px;
    }
  }
  .card-item:last-child {
    border-bottom: none;
  }
  .has-answer {
    width: 50px;
    height: 50px;
    padding: 9px 0;
    font-size: 13px;
    .sum {
      display: block;
      margin-bottom: 4px;
    }
  }
  .has-answer.answer {
    background: #409eff;
    border: #409eff;
    color: #fff;
  }
  .card-content {
    margin-left: 20px;
  }
}
.side-alert {
  .title {
    margin-top: 0;
  }
  .side-btn {
    width: 100%;
    font-size: 15px;
  }
  .user-title {
    font-size: 15px;
    font-weight: bold;
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
  .wrap-img {
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border-radius: 2px;
  }
}
</style>
