<template>
  <div class="home">
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"
export default {
  name: 'home',
  components: {
    NavBar
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #ff5777;
  color: #fff;
}
</style>
