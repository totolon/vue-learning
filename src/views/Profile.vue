<template>
  <div class="profile">
    <NavBar class="nav-bar">
      <div slot="center">我的</div>
    </NavBar>
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
  mounted() {}
}
</script>
<style scoped>
.nav-bar {
  background-color: #ff5777;
  color: #fff;
}
</style>
