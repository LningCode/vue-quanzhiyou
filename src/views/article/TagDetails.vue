<template>
  <div class="wraper martop-65">
    <div class="section padtop-65">
      <h1 class="title">后端</h1>
      <p class="info">298420 点击 &nbsp;&nbsp; 19894 文章</p>
    </div>
    <aeticle-list></aeticle-list>
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
  created() {}
};
</script>

<style scoped lang="scss">
.section {
  text-align: center;
  margin-bottom: 45px;
  .title {
    margin: 0;
    color: #8a4182;
    font-size: 24px;
  }
  .info {
    margin-top: 5px;
    font-size: 16px;
    columns: #999;
  }
}
</style>
