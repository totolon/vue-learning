<template>
  <div class="list-item" v-if="itemInfo">
    <a class="item-url" :href="itemInfo.url">
    <img :src="imgUrl" alt :title="itemInfo.title" @load="imgLoaded"/>
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
  computed: {
    imgUrl() {
      if (this.itemInfo && this.itemInfo.cover) {
        let _u = this.itemInfo.cover.substring(7);
        return "https://images.weserv.nl/?url=" + _u;
      }else{
        return null
      }
    }
  },
  methods: {
    // 解决豆瓣403图片缓存问题(豆瓣服务器拒绝访问图片)
    // getImages(_url) {
    //   if (_url !== undefined) {
    //     let _u = _url.substring(7);
    //     return "https://images.weserv.nl/?url=" + _u;
    //   }
    // }
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
