<template>
  <div>
    <header-comp></header-comp>
    <div class="user-info">
      <div class="user-head-img">
        <img src="../assets/head-sculpture.png"
             alt="">
      </div>
      <div class="user-title">
        <p>子夜照弦歌</p>
        <span>这个人很懒,啥也没留下...</span>
      </div>
    </div>
    <art-lists></art-lists>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import headerComp from "../components/header";
import artLists from "../components/articleLists";
import footerComp from "../components/footer";
export default {
  components: {
    headerComp,
    artLists,
    footerComp
  },
  data() {
    return {};
  },

  methods: {}
};
</script>
<style scoped>
.user-info {
  width: 50%;
  margin: 0 auto;
  margin-top: 81px;
  border: solid 1px #e6e6e6;
  border-radius: 10px;
  padding: 10px 30px;
  overflow: hidden;
}

.user-head-img {
  width: 80px;
  height: 80px;
  overflow: hidden;
  float: left;
}
.user-head-img img {
  width: 100%;
}

.user-title {
  float: left;
}

.user-title p {
  font-size: 18px;
  font-weight: bold;
  padding: 12px 20px;
}

.user-title span {
  padding-top: 10px;
  padding-left: 20px;
  font-size: 12px;
  color: #999;
}
</style>
