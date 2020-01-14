<template>
  <div class="category">
    <NavBar class="nav-bar">
      <div slot="center">分类</div>
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
  mounted() {}
}
</script>
<style scoped>
.nav-bar {
  background-color: #ff5777;
  color: #fff;
}
</style>
