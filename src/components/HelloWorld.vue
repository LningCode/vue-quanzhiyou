<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/login">登录注册</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Qaunzy App'
    }
  }
}
</script>

<style scoped>

</style>
