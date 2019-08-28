<template>
  <div class="sign">
    <div class="logo">
      <a href="/"><img width="80" src="../../assets/images/logo.png" alt=""></a>
    </div>
    <el-button class="message" type="info" icon="el-icon-message" circle></el-button>
    <div class="cen-auto">
      <h1 class="medium">使用Point，您可以查看数千个视频，电子书和课程。</h1>
      <div class="login-main">
        <el-tabs class="login-group" stretch=true v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="in">
            <div class="login-wrap">
              <div class="form-group text-left">
                <label for="username" class="control-label">手机号</label>
                <el-input name="username" maxlength="11" minlength="11" v-model="username" placeholder="请输入11位手机号"></el-input>
              </div>
              <div class="form-group text-left">
                <label for="password" class="control-label">密码</label>
                <span class="pull-right">
                  <router-link to="/forgot">忘记密码</router-link>
                </span>
                <el-input maxlength="6" minlength="18" name="password" placeholder="不少于 6 位的密码" v-model="password" show-password></el-input>
              </div>
              <div class="form-group">
                <el-button type="primary">登录</el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="注册" name="up">
            <div class="login-wrap">
              <div class="form-group text-left">
                <label for="nickname" class="control-label">名字</label>
                <el-input name="nickname" maxlength="11" minlength="11" v-model="nickname" placeholder="真实姓名或昵称"></el-input>
              </div>
              <div class="form-group text-left">
                <label for="username" class="control-label">手机号</label>
                <el-input name="username" maxlength="11" minlength="11" v-model="username" placeholder="11 位手机号"></el-input>
              </div>
              <div class="form-group text-left">
                <el-input class="w-60" name="randomcode" maxlength="11" minlength="11" v-model="randomcode" placeholder="验证码"></el-input>
                <el-button class="w-30 pull-right" round>6587</el-button>
              </div>
              <div v-if="phoneCode" class="form-group text-left">
                <el-input class="w-60" name="phonecode" maxlength="11" minlength="11" v-model="phonecode" placeholder="手机验证码"></el-input>
                <el-button class="w-30 pull-right" round>发送验证码</el-button>
              </div>
              <div class="form-group text-left">
                <label for="password" class="control-label">密码</label>
                <el-input maxlength="6" minlength="18" name="password" placeholder="不少于 6 位的密码" v-model="password" show-password></el-input>
              </div>
              <div class="form-group">
                <el-button type="primary">注册</el-button>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <p class="text-muted text-center">继续即表示你同意
          <router-link to="/tos">《服务条款》</router-link>和
          <router-link to="/privacy">《隐私政策》</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'in',
      username: '',
      password: '',
      nickname: '',
      randomcode: '',
      phonecode: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped lang="scss">
.sign .message{
  position: absolute;
  bottom: 50px;
  right: 80px;
  width: 45px;
  height: 45px;
}
.sign .message .el-icon-message{
  font-size: 24px;
}
.sign{
  position: relative;
  height: 100%;
  min-height: 750px;
  text-align: center;
  background: #f7f7f7;
}
.logo{
  position: absolute;
  top: 60px;
  margin-left: 60px;
}
.cen-auto{
  width: 400px;
  margin: 60px auto 0;
  vertical-align: middle;
  display: inline-block;
}
.medium{
  margin-top: 0;
  margin-bottom: 40px;
  color: #424242;
  font-size: 20px;
}
.login-main{
  padding: 50px 40px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
}
.form-group{
  margin-bottom: 15px;
}
.control-label{
  display: inline-block;
  padding-left: 3px;
  margin-bottom: 5px;
  font-weight: bold;
}
.text-muted{
  color: #424242;
  margin-top: 0;
}
</style>
