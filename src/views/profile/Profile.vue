<template>
  <div class="profile">
    <NavBar class="nav-bar">
      <div slot="center">我的</div>
    </NavBar>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <ul>
          <li>自定义1</li>
          <li>自定义2</li>
          <li>自定义3</li>
          <li>自定义4</li>
          <li>自定义5</li>
          <li>自定义6</li>
          <li>自定义7</li>
          <li>自定义8</li>
          <li>自定义9</li>
          <li>自定义10</li>
          <li>自定义11</li>
          <li>自定义12</li>
          <li>自定义13</li>
          <li>自定义14</li>
          <li>自定义15</li>
          <li>自定义16</li>
          <li>自定义17</li>
          <li>自定义18</li>
          <li>自定义19</li>
          <li>自定义20</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"

import BScroll from '@better-scroll/core'

export default {
  name: "",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  activated() {
    // console.log("huoyue")
  },
  mounted() {
    let scroll = new BScroll(this.$refs.wrapper)
    console.log(scroll)
  }
}
</script>
<style scoped>
.nav-bar {
  background-color: #513669;
  color: #fff;
}
.wrapper {
  position: absolute;
  top: 44px;
  height: 200px;
  overflow: hidden;
}
</style>
