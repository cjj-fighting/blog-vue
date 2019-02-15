<template>
  <div>
    <header-comp></header-comp>

    <div class="art-info">
      <h1 class="art-title">这是测试标题</h1>

      <h3 class="author-info">
        子夜照弦歌
      </h3>
      <div class="art-content">
        这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容这是一大堆内容,这是一大堆内容,这是一大堆内容,这是一大堆内容
      </div>
    </div>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import headerComp from "../components/header";
import footerComp from "../components/footer";
export default {
  components: {
    headerComp,
    footerComp
  },
  data() {
    return {};
  },

  methods: {}
};
</script>
<style scoped>
.art-info{
  width: 50%;
  margin: 0 auto;
  margin-top: 81px;
  /* border: solid 1px #e6e6e6;
  border-radius: 10px; */
  padding: 10px 30px;
  overflow: hidden;
}

.art-title{
  margin: 20px 0;
}

.author-info{
  margin: 10px auto;
  color: #999;
}

.art-content{
  margin-top: 10px;
  color: #666;
}
</style>
