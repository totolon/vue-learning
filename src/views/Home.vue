<template>
  <div class="home">
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>
    <Swiper >
      <SwiperItem>1</SwiperItem>
      <SwiperItem>2</SwiperItem>
      <SwiperItem>3</SwiperItem>
      <SwiperItem>4</SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"
import {Swiper,SwiperItem} from "components/common/swiper"
import {getHomeMultidata} from "network/home"
export default {
  name: 'home',
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      result: null
    }
  },
  created() {
    getHomeMultidata().then(
      res => {
        console.log(res)
      }
    )
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #ff5777;
  color: #fff;
}
</style>
