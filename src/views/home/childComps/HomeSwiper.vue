<template>
<!-- 此处必须要判断数据是否存在，否则在重复快速刷新时，会出现bug -->
  <Swiper v-if="banners.length">
      <SwiperItem v-for="banner in banners" :key="banner.image">
        <a :href="banner.link">
          <img :src="banner.image">
        </a>
      </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name: "",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [
        {image: require('assets/img/swiper/dog.jpg')},
        {image: require('assets/img/swiper/food.jpg')},
        {image: require('assets/img/swiper/pink.jpg')}]
      }
    }
  },
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style scoped>
</style>
