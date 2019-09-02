<template>
  <div class="wraper-pull martop-65">
    <bread-crumb
      :breadcrumbData="[{name: '首页',path: '/'},{name: '视频列表',path: '/video'},{name: '视频详情'}]"
    ></bread-crumb>

    <div class="video-wrap">
      <div
        @mouseover="drawerBtn = true"
        @mouseleave="drawerBtn = false"
        class="video-ctn course-cover"
      >
        <video
          controlslist="nodownload"
          src="https://video-cdn.juejin.im/sv/3192d0e-16b01b5ecd4/3192d0e-16b01b5ecd4.mp4"
          controls="controls"
        ></video>
        <div class="video-cover" :class="drawer ? 'cur' : ''">
          <div class="pot-re">
            <el-button
              :title="drawer ? '关闭视频列表' : '展开视频列表'"
              v-show="drawerBtn"
              @click="drawer = drawer ? false : true"
              class="icon-arrow"
              type="primary"
              :icon="drawer ? 'el-icon-right' : 'el-icon-back'"
              circle
            ></el-button>
            <div class="video-cover-list">
              <ul>
                <li :class="i == 1 ? 'active' : ''" v-for="i in 10" :key="i">
                  <span class="labes pull-left">录播</span>
                  <div class="task-item">
                    <h5 class="title">完整视频配套代码微信：weiwei754651</h5>
                    <p class="time">27分钟</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="course-action">
        <h1 class="title">
          PHP7进阶到架构-Laravel/Redis/Swoole/高并发分布式
          <el-tag class="tag">免费</el-tag>
        </h1>
        <div class="hints">
          <span>4805 人学过</span>&nbsp;&nbsp;
          <span>作者: Cody</span>
        </div>
      </div>
    </div>

    <el-tabs type="card" class="marbm-65" v-model="activeName">
      <el-tab-pane label="课程目录" name="catalog" class="details-ctn">
        <h2 class="sections-title">全部课程(共66节)</h2>
        <el-collapse accordion>
          <el-collapse-item v-for="item in 10" :key="item">
            <template slot="title">
              <div class="detail-header">
                <el-button class="process" circle>{{item}}</el-button>
                <span class="section-title">EcmaScript5.1新增语法【下】</span>
              </div>
            </template>
            <div class="detail-body">
              <div class="task-ctn" v-for="i in item" :key="i">
                <el-button class="pay-btn pull-left" icon="el-icon-caret-right" circle></el-button>
                <div class="task-info">
                  <h4 class="task-title">{{i}}.额外的数组</h4>
                  <p class="time">时长8分钟</p>
                </div>
                <el-button class="pay-video" type="primary" plain>看录播</el-button>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="课程介绍" name="course">作者太赖，还没写课程介绍哦～</el-tab-pane>
      <el-tab-pane label="课程评论" name="comment">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="course-related"
        >
          <el-form-item label-width="0" prop="desc">
            <el-input
              placeholder="输入你想对本课程的评价，文明评论是根本。"
              class="textarea"
              size="medium"
              type="textarea"
              v-model="ruleForm.desc"
            ></el-input>
          </el-form-item>
          <el-form-item class="submit">
            <el-button size="medium" type="primary" @click="submitForm('ruleForm')">发表评论</el-button>
          </el-form-item>
        </el-form>

        <div class="comment-item">
          <ul class="entry">
            <li class="item" v-for="item in 5" :key="item">
              <router-link class="wrap-img" to="/noteDetails">
                <img width="100%" height="100%" src="../../assets/images/logo.png" alt="120" />
              </router-link>
              <div class="content">
                <p class="abstract">About me部分，老师流露心声了哈</p>
                <h3 class="title">疯狂的石头</h3>
                <div class="meta clearfix">
                  <span class="pull-left">2019-08-07 12:37:33</span>
                  <el-button class="pull-right" type="mini" icon="el-icon-chat-dot-round">回复</el-button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <pag-ination :total="100" :pageSize="10"></pag-ination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb";
import PagInation from "@/components/PagInation";
export default {
  data() {
    return {
      activeName: "catalog",
      drawer: false,
      drawerBtn: false,
      ruleForm: {
        desc: ""
      },
      rules: {
        desc: [
          {
            min: 3,
            max: 300,
            required: true,
            message: "请填写3-300个字符的评论内容",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {
    BreadCrumb,
    PagInation
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
.video-ctn {
  position: relative;
  overflow: hidden;
  .video-cover {
    position: absolute;
    top: 0;
    right: -260px;
    bottom: 0;
    z-index: 2;
    background: #131313;
    width: 260px;
    padding: 10px;
    box-sizing: border-box;
    transition: right 0.7s ease-in-out;
    .pot-re {
      height: 100%;
      .icon-arrow {
        position: absolute;
        top: 50%;
        left: -42px;
      }
    }
    .video-cover-list {
      overflow-y: auto;
      height: 100%;
    }
    li {
      padding: 8px 0;
      cursor: pointer;
    }
    .labes {
      background: #777;
      border-radius: 2px;
      font-size: 12px;
      width: 32px;
      text-align: center;
      height: 18px;
      line-height: 19px;
      color: #0f0f0f;
    }
    .active .labes {
      color: #fff;
      background: #409eff;
    }
    .task-item {
      padding-left: 40px;
    }
    .title {
      height: 37px;
      line-height: 1.4;
      overflow: hidden;
      margin-bottom: 5px !important;
      word-wrap: break-word;
      text-overflow: -o-ellipsis-lastline;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .title:hover {
      text-decoration: underline;
    }
    .title,
    .time {
      color: #fff;
      font-size: 14px;
      margin: 0;
    }
    .active .title,
    .active .time {
      color: #409eff;
    }
  }
  .video-cover.cur {
    right: 0;
  }
  video {
    display: block;
    width: 100%;
    border: none;
    min-height: 400px;
  }
  video:focus {
    outline: none;
  }
  video::-internal-media-controls-download-button {
    display: none;
  }
  video::-webkit-media-controls-enclosure {
    overflow: hidden;
  }
  video::-webkit-media-controls-panel {
    width: calc(100% + 30px);
  }
}
.course-action {
  margin-bottom: 20px;
  background: #232323;
  padding: 10px 15px;
  .title {
    margin: 0;
    font-size: 18px;
    color: #fff;
    .tag {
      vertical-align: text-top;
      margin-left: 5px;
    }
  }
  .hints {
    font-size: 14px;
    color: #a4a4a4;
    margin-top: 5px;
  }
}
.details-ctn {
  .section-title {
    font-size: 16px;
    margin-left: 10px;
  }
  .process {
    padding: 0;
    width: 32px;
    height: 32px;
    border: 2px solid #409eff;
    color: #409eff;
    font-size: 16px;
  }
  .task-info {
    padding-left: 50px;
    padding-right: 100px;
  }
  .pay-btn {
    color: #ade1fa;
    border: 2px solid #ade1fa;
    padding: 0;
    width: 30px;
    height: 30px;
    font-size: 16px;
    margin-top: 8px;
  }
  .detail-body {
    padding-top: 15px;
  }
  .task-ctn {
    position: relative;
    padding: 10px 15px;
    .task-title {
      margin: 0;
      font-size: 14px;
    }
    .time {
      margin: 0;
    }
  }
  .pay-video {
    position: absolute;
    top: 50%;
    right: 25px;
    margin-top: -16px;
  }
}
.course-related {
  .submit {
    text-align: right;
  }
}
.comment-item {
  padding-top: 40px;
  .item {
    border-top: 1px solid #ebeef5;
    display: flex;
    align-items: center;
    padding: 20px 0;
    align-items: flex-start;
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
    .meta {
      font-size: 13px;
      color: #999;
      .pull-left {
        margin-top: 5px;
      }
    }
  }
  .title {
    color: #333;
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 0;
  }
  .abstract {
    margin: 0 0 10px;
    color: #999;
    font-size: 14px;
  }
  .wrap-img {
    flex: 0 0 auto;
    width: 60px;
    height: 60px;
    margin-right: 15px;
    background: #fff;
    border-radius: 2px;
  }
}
</style>
