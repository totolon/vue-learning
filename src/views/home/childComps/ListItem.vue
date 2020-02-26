<template>
  <div class="list-item" v-if="itemInfo">
    <a class="item-url" :href="itemInfo.url">
    <img :src="itemInfo.cover" alt :title="itemInfo.title" @load="imgLoaded"/>
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
  width: 30%;
}
.list-item img {
  width: 100%;
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
