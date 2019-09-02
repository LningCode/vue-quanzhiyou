<template>
  <div class="article-wraper wraper martop-65">
    <el-container>
      <el-main class="note-list">
        <el-carousel trigger="click" height="250px">
          <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
        </el-carousel>

        <aeticle-list></aeticle-list>
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
            <el-button
              v-for="o in 10"
              :key="o"
              class="tag"
              @click="$router.push({path:'/tagDetails'})"
              round
            >圆形按钮</el-button>
          </div>
        </el-card>
        <div class="advertising martop-20">
          <img src="../../assets/images/uid.png" alt />
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import AeticleList from "@/views/share/AeticleList";
export default {
  data() {
    return {};
  },
  components: {
    AeticleList
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
    margin-left: 0;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 9px 13px;
    background: #f3f6f3;
    border: 1px solid #f3f6f3;
  }
  .advertising img {
    display: block;
    width: 100%;
    border-radius: 4px;
  }
}
.note-list {
  padding-right: 45px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
