<template>
  <div class="back-top" @click="topClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  components: {},
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    topClick() {
      this.$emit('backTop')
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
</style>
