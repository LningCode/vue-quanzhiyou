<template>
  <el-breadcrumb
    class="breadcrumb"
    :separator="separator"
    :separator-class="separatorClass ? separatorClass : 'el-icon-arrow-right'"
  >
    <el-breadcrumb-item :to="{ path: i.path }" v-for="i in breadcrumbData" :key="i.name">{{i.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    separator: String,
    separatorClass: String,
    breadcrumbData: Array
  }
};
</script>

<style scoped lang="scss">
.breadcrumb {
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 16px;
}
</style>
