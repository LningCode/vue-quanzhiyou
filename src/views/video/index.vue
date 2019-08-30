<template>
  <div class="wraper martop-65 tagall">
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>视频</el-breadcrumb-item>
      <el-breadcrumb-item>视频列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="filter-wraper">
      <el-row>
        <el-col :span="2">
          <span class="filter-title">分类 :</span>
        </el-col>
        <el-col :span="22" class="filter-item">
          <el-button class="tag active" round v-for="i in 15" :key="i">分类 {{i}}</el-button>
        </el-col>
        <el-col :span="2">
          <span class="filter-title">标签 :</span>
        </el-col>
        <el-col :span="22" class="filter-item">
          <el-button class="tag" round v-for="i in 15" :key="i">标签 {{i}}</el-button>
        </el-col>
        <el-col :span="24" class="filter-group">
          <el-button class="btn active">全部</el-button>
          <el-button class="btn">最热</el-button>
          <el-button class="btn">最新</el-button>
        </el-col>
      </el-row>
    </div>

    <el-row class="video-item">
      <el-col class="item" v-for="item in 10" :key="item" :span="8">
        <div class="wrap">
          <img class="cover" src="../../assets/images/video.png" alt="180" />

          <div class="info-wrapper">
            <h6 class="course-name">Linux 基础入门（新版）</h6>
            <div
              class="course-des"
            >要在实验楼愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。</div>

            <div class="recent clearfix">
              <el-button class="pull-left" size="mini" icon="el-icon-view">1242</el-button>
              <el-button class="pull-right" size="mini" type="primary" round>免费播放</el-button>
            </div>
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
      currentDate: new Date()
    };
  },
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
.bread{
  padding: 30px 10px;
  font-size: 16px;
}
.filter-wraper{
  margin-left: 10px;
  margin-right: 11px;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  transition: 0.2s ease;
  -webkit-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
  -o-transition: 0.2s ease;
  -ms-transition: 0.2s ease;
  .filter-title{
    font-size: 16px;
    font-weight: bold;
  }
  .tag{
    margin-left: 0;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid #fff;
    font-size: 15px;
    padding: 7px 12px;
  }
  .tag.active,.tag:hover{
    border: 1px solid #8a4182;
    color: #fff;
    background: #8a4182;
  }
}
.filter-group{
  border-top: 1px solid #ebeef5;
  padding-top: 20px;
  margin-top: 10px;
  .btn{
    font-size: 15px;
  }
  .btn.active{
    color: #8a4182;
    border: 1px solid #8a4182;
  }
}
.video-item {
  margin-top: 35px;
  .item {
    padding: 0 10px 20px;
    .wrap {
      text-align: center;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      background: rgba(181, 181, 181, 0.1);
      transition: 0.2s ease;
      -webkit-transition: 0.2s ease;
      -moz-transition: 0.2s ease;
      -o-transition: 0.2s ease;
      -ms-transition: 0.2s ease;
    }
    .cover {
      width: 100%;
      display: block;
    }
    .recent {
      margin-top: 15px;
    }
    .course-name {
      margin: 0;
      font-size: 16px;
      width: 100%;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .course-des {
      height: 35px;
      font-size: 13px;
      margin-top: 10px;
      line-height: 1.4;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: -o-ellipsis-lastline;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .info-wrapper {
      padding: 15px 10px;
      text-align: left;
    }
  }
}
</style>
