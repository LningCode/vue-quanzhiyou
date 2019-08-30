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
.video-item {
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
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
    }
    .info-wrapper {
      padding: 15px 10px;
      text-align: left;
    }
  }
}
</style>
