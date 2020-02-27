<template>
  <div class="list-item" v-if="itemInfo">
    <a class="item-url" :href="itemInfo.url">
    <div class="img-box">
    <img :src="itemInfo.cover" alt :title="itemInfo.title" @load="imgLoaded"/>
    </div>
    <div class="item-info">
      <span class="title">{{ itemInfo.title }}</span>
      <span class="score">{{ itemInfo.rate }}</span>
    </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  components: {},
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    imgLoaded() {
      console.log('图片加载完毕')
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.list-item {
  width: 30vw;
  margin-bottom: 10px;
}
.img-box {
  width: 30vw;
  height: calc(30vw/0.75);
  overflow: hidden;
  margin-bottom: 5px;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.item-url {
  text-decoration: none;
  color: #000;
  font-size: 14px;
}
.score {
  color: red;
}
</style>
