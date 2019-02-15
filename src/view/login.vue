<template>
  <div class="login">
    <div class="login-title">登录</div>
    <div class="reg-form">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="80px"
               class="demo-ruleForm">
        <el-form-item label="昵称"
                      prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ],

        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
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
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.login {
  width: 450px;
  margin: 80px auto;
}

.login-title {
  width: 100%;
  line-height: 80px;
  margin: 20px 0;
  color: #409eff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.reg-form {
  padding: 25px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #ccc;
  background-color: #ececec;
}
</style>
