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
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="confimPassword">
          <el-input v-model="ruleForm.confimPassword" type="password"></el-input>
        </el-form-item>
        <el-form-item label="性别"
                      prop="gender">
          <el-select v-model="ruleForm.gender"
                     placeholder="请选择性别">
            <el-option label="女"
                       value="f"></el-option>
            <el-option label="男"
                       value="m"></el-option>
            <el-option label="保密"
                       value="x"></el-option>
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
import axios from "axios"
import Qs from "qs"
import md5 from "md5"
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
        desc: null
      },
      rules: {
        username: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
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
          // alert("submit!");

          // const options = {
          //   method: "POST",
          //   headers: { "content-type": "application/x-www-form-urlencoded" },
          //   data: qs.stringify(data),
          //   url
          // };

          axios({
            url: "/api/register",
            method: "post",
            transformRequest: [
              function(data) {
                return Qs.stringify(data);
              }
            ],
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }, //deviceCode: "A95ZEF1-47B5-AC90BF3"

            data: {
              name: this.ruleForm.username,
              gender: this.ruleForm.gender,
              password: md5(this.ruleForm.password),
              // confirmpass: this.ruleForm.confimPassword,
              avatar: "",
            }
          })
            .then(function(res) {
              console.log(res.data);
              if (res.data.code === 200) {
                // this.$message.success(res.data.msg)
                alert(res.data.msg);
              }
            })
            .catch(function(err) {
              console.log(err);
            });

          // axios
          //   .post("/api/register", {
          //     name: this.ruleForm.username,
          //     gender: this.ruleForm.gender,
          //     password: this.ruleForm.password,
          //     confirmpass: this.ruleForm.confimPassword,
          //     desc: this.ruleForm.desc
          //   })
          //   .then(function(res) {
          //     // console.log(res.data);
          //     if (res.data.code === 200) {
          //       // this.$message.success(res.data.msg)
          //       alert(res.data.msg);
          //     }
          //   })
          //   .catch(function(err) {
          //     console.log(err);
          //   });
        } else {
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
