<template>
  <div class="profile">
    <NavBar class="nav-bar">
      <div slot="center">我的</div>
    </NavBar>
    <div class="wrapper" ref="wrapper">
      <img src="~assets/img/profile.png" alt="">
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"


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
  bottom: 49px;
  width: 100%;
  overflow: hidden;
}
.wrapper img {
  height: 100%;
  width: 100%;
}
</style>
