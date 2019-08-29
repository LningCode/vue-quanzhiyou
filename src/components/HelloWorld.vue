<template>
  <div class="hello">
    <head-nav></head-nav>123
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeadNav from "@/views/share/HeadNav";
import AppFooter from "@/views/share/AppFooter";
export default {
  name: "HelloWorld",
  components: {
    HeadNav,
    AppFooter
  },
  data() {
    return {
      msg: "Welcome to Your Qaunzy App"
    };
  }
};
</script>

<style scoped>
</style>
