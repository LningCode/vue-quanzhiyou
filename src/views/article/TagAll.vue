<template>
  <div class="wraper martop-65 tagall">
    <el-breadcrumb class="list-header" separator>
      <el-breadcrumb-item class="active">全部标签</el-breadcrumb-item>
      <el-breadcrumb-item>最热</el-breadcrumb-item>
      <el-breadcrumb-item>最新</el-breadcrumb-item>
      <el-breadcrumb-item>
        <el-input class="input" placeholder="请输入内容" v-model="tagValue" clearable></el-input>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="tag-item">
      <el-col class="item" v-for="item in 10" :key="item" :span="8">
        <div class="wrap">
          <img class="avatar" src="../../assets/images/logo.png" alt="180" />
          <h4 class="name">前端</h4>
          <p class="desc">
            <span>91814 浏览</span>&nbsp;&nbsp;
            <span>1027 文章</span>
          </p>
          <el-button @click="$router.push({path: '/tagDetails'})" class="look-btn" round>查看</el-button>

          <hr />
          <div class="meta">最近更新文章</div>
          <div class="recent-update">
            <router-link
              class="new"
              to="/noteDetails"
              v-for="item in 3"
              :key="item"
            >你和东野圭吾之间，差1000倍的不是功底，而是写作的底层逻辑</router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagValue: ""
    };
  },
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
.list-header {
  padding: 30px 20px;
  .el-breadcrumb__item {
    font-size: 16px;
    margin-right: 10px;
    line-height: 36px;
    cursor: pointer;
  }
  .input {
    padding-left: 20px;
  }
}
.tag-item {
  padding-bottom: 80px;
  .item {
    padding: 0 10px 10px;
  }
  .wrap {
    height: 320px;
    margin-top: 45px;
    padding: 0 20px 15px;
    text-align: center;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    background: hsla(0, 0%, 71%, 0.1);
    transition: 0.2s ease;
    -webkit-transition: 0.2s ease;
    -moz-transition: 0.2s ease;
    -o-transition: 0.2s ease;
    -ms-transition: 0.2s ease;
  }
  .avatar {
    width: 100px;
    height: 100px;
    margin: -30px 0 10px;
    display: inline-block;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 50px;
  }
  .taginfo {
    color: #333;
  }
  .taginfo:hover {
    text-decoration: none;
  }
  .name {
    font-size: 21px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }
  .desc {
    color: #909090;
  }
  .look-btn {
    padding: 12px 26px;
    font-size: 14px;
    color: #8a4182;
  }
  .new {
    font-size: 13px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    color: #333;
  }
  .meta {
    float: left;
    margin-top: -29px;
    padding-right: 10px;
    font-size: 12px;
    color: #969696;
    background: #f8f8f8;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
}
</style>
