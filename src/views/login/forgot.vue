<template>
  <div class="forgot">
    <header class="header container text-center">
      <router-link class="logo" to="/login">
        <img width="80" src="../../assets/images/logo.png" alt="">
      </router-link>
      <p class="desc">欢迎来到Qaunzy</p>
    </header>
    <div class="login-main">
      <div class="login-wrap">
        <div class="form-group text-left">
          <label for="username" class="control-label">手机号</label>
          <el-input name="username" maxlength="11" minlength="11" v-model="username" placeholder="11 位手机号"></el-input>
        </div>
        <div class="form-group text-left">
          <el-input class="w-60" name="randomcode" maxlength="11" minlength="11" v-model="randomcode" placeholder="验证码"></el-input>
          <el-button class="w-30 pull-right" round>6587</el-button>
        </div>
        <div class="form-group text-left">
          <el-input class="w-60" name="phonecode" maxlength="11" minlength="11" v-model="phonecode" placeholder="手机验证码"></el-input>
          <el-button class="w-30 pull-right" round>发送验证码</el-button>
        </div>
        <div class="form-group text-left">
          <label for="password" class="control-label">密码</label>
          <el-input maxlength="6" minlength="18" name="password" placeholder="不少于 6 位的密码" v-model="password" show-password></el-input>
        </div>
        <div class="form-group">
          <el-button type="primary">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forgot',
  data () {
    return {
      msg: 'Welcome to Forgot'
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  padding-top: 65px;
}
.header .desc{
  color: #424242;
  font-size: 20px;
  margin-bottom: 50px;
}
.form-group{
  margin-top: 15px;
}
.login-main{
  max-width: 55%;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.control-label{
  display: inline-block;
  padding-left: 3px;
  margin-bottom: 5px;
  font-weight: bold;
}
</style>