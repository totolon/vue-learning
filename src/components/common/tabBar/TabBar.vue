<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
.tab-bar {
  display: flex;
  position: fixed;
  background-color: #f6f6f6;
  /* align-items: center; */
  /* justify-content: center; */
  /* align-content: center; */
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 2px rgba( 204, 204, 204, 0.2);
}
</style>
