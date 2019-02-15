<template>
  <div class="header">
    <el-row>
      <el-col :span="6">
        <a class="logo">myBlog</a>
      </el-col>
      <el-col :span="10">
        <el-input placeholder="请输入内容"
                  v-model="search"
                  class="input-with-select">
          <el-button slot="append"
                     icon="el-icon-search" @click="searchFun"></el-button>
        </el-input>
      </el-col>
      <el-col :span="5">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 active-text-color="#409EFF"
                 text-color="#666">
          <el-submenu v-if="isShowLog"
                      index="1">
            <template slot="title">
              子夜照弦歌
            </template>
            <el-menu-item index="1-1">我的主页</el-menu-item>
            <el-menu-item index="1-2">列表分类</el-menu-item>
            <el-menu-item index="1-3"
                          @click="quit">登出</el-menu-item>
          </el-submenu>
          <el-menu-item v-if="!isShowLog"
                        index="1"
                        @click="login">登录</el-menu-item>
          <el-menu-item v-if="!isShowLog"
                        index="2"
                        @click="regist">注册</el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="3"
              style="text-align:left;">
        <el-button type="primary"
                   round>发表文章</el-button>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "0",
      search: "",
      isShowLog: false
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login() {
      this.$router.push({
        path: "/login",
        name: "Login"
      })
    },
    regist() {
      this.$router.push({
        path: "/register",
        name: "Register"
      })
    },
    quit() {},
    searchFun() {}
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-bottom: solid 1px #e6e6e6;
}
.logo {
  color: #409eff;
  font-weight: bold;
  font-size: 24px;
}

.el-submenu {
  /* width: 100%; */
  text-align: left;
}

.el-menu-item {
  /* width: 100%; */
  text-align: left;
}
.el-menu {
  float: right;
}
.el-submenu__title {
  border-bottom: 2px solid #fff !important;
}
.el-menu-item {
  border-bottom: 2px solid #fff !important;
}
</style>
