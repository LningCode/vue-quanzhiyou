<template>
  <div class="feedback wraper martop-65">
    <el-form
      :model="ruleForm"
      :rules="rules"
      size="medium"
      ref="ruleForm"
      label-width="100px"
      class="feed padtop-65 padbm-80"
      :label-position="labelPosition"
    >
      <el-form-item>
        <h3>有问题请给作者留言</h3>
        <p>感谢您来Quanzy，您在掘金遇到问题都可以给作者留言，尽快帮您解决。</p>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input type="number" v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="常用邮箱" prop="emil">
        <el-input type="number" v-model="ruleForm.emil"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="WeChat">
        <el-input type="number" v-model="ruleForm.WeChat"></el-input>
      </el-form-item>
      <el-form-item label="留言内容" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" round type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      ruleForm: {
        phone: "",
        desc: "",
        emil: "",
        WeChat: ""
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入11位数字的手机号码",
            trigger: "blur"
          }
        ],
        emil: [{ required: true, message: "请填写常用邮箱", trigger: "blur" }],
        WeChat: [
          { required: true, message: "请填写微信号码", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请填写留言内容", trigger: "blur" }]
      }
    };
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
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.feed {
  max-width: 500px;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  .el-form-item {
    margin-bottom: 20px;
  }
  .btn {
    width: 100%;
    height: 40px;
    font-size: 16px;
    margin-top: 30px;
  }
}
</style>
