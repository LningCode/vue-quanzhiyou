<template>
  <el-pagination
    class="pagination"
    background
    :page-size="pageSize"
    layout="total, prev, pager, next"
    :total="total"
  ></el-pagination>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    total: 0,
    pageSize: 0
  }
};
</script>

<style scoped lang="scss">
.pagination {
  padding: 20px 0;
  text-align: center;
}
</style>
