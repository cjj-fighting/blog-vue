<template>
  <div class="article-add">
    <div class="article-add-form">
      <div class="article-add-title">发表文章</div>
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="80px"
               class="demo-ruleForm">
        <el-form-item label="标题"
                      prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="标签"
                      prop="tag">
          <el-select v-model="ruleForm.tag"
                     placeholder="请选择标签">
            <el-option label="前端"
                       value="web"></el-option>
            <el-option label="其他"
                       value="other"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容"
                      prop="content">
          <el-input type="textarea"
                    :rows="5"
                    v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">发表</el-button>
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
        content: "",
        tag: ""
      },
      rules: {
        username: [{ required: true, message: "请输入标题", trigger: "blur" }],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        tag: [{ required: true, message: "请选择标签", trigger: "change" }]
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
.article-add {
  width: 50%;
  margin: 80px auto;
}

.article-add-title {
  width: 100%;
  line-height: 80px;
  margin: 0 0 20px 0;
  color: #409eff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.article-add-form {
  padding: 25px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #ccc;
  background-color: #ececec;
}
.el-select{
  width: 100%;
}
</style>
