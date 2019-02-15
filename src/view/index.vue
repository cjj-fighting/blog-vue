<template>
  <div class="index">
    <header-comp></header-comp>
    <div class="art-list">
      <art-lists></art-lists>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import headerComp from "../components/header";
import artLists from "../components/articleLists";
import footerComp from "../components/footer";
export default {
  name: "Index",
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
.index {
  position: relative;
}
.art-list {
  width: 100%;
  overflow-y: scroll;
  margin-top: 61px;
}
</style>
