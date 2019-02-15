<template>
  <div class="regist">
    <div class="reg-form">
      <div class="regist-title">注册</div>
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
        <el-form-item label="确认密码"
                      prop="confimPassword">
          <el-input v-model="ruleForm.confimPassword"></el-input>
        </el-form-item>
        <el-form-item label="性别"
                      prop="gender">
          <el-select v-model="ruleForm.gender"
                     placeholder="请选择性别">
            <el-option label="女"
                       value="0"></el-option>
            <el-option label="男"
                       value="1"></el-option>
            <el-option label="保密"
                       value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述"
                      prop="desc">
          <el-input type="textarea"
                    v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="text"
                     size="mini"
                     @click="goLog">已有账号?去登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.password !== "") {
          this.$refs.ruleForm.validateField("confimPassword");
        }
        callback();
      }
    };
    let checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        gender: "",
        password: "",
        confimPassword: "",
        desc: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ],

        password: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        confimPassword: [
          { required: true, validator: checkPass, trigger: "blur" }
        ],
        gender: [
          { required: true, message: "请选择活动区域", trigger: "change" }
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
    },
    goLog() {
      this.$router.push({
        path: "/login",
        name: "Login"
      });
    }
  }
};
</script>
<style scoped>
.regist {
  width: 450px;
  margin: 80px auto;
}

.regist-title {
  width: 100%;
  line-height: 80px;
  margin: 0 0 20px 0;
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
