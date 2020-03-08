<template>
  <div class="nav-filter">
    <img src="~assets/img/icon/filter.png" alt="">
    <div class="selector" v-if="showSelector">
      <div class="filter_item" v-for="(item,index) in options" :key="item" @click="optionClick(index)">
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFilter",
  components: {},
  props: {
    showSelector: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    optionClick(index) {
      this.$emit('optionClick',index)
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.filter img {
  height: 28px;
  vertical-align: middle;
}
.selector {
  position: fixed;
  top: 44px;
  right: 10px;
  z-index: 1000;
  background-color: #fff;
  padding: 0 8px;
}
.filter_item {
  border-bottom: 1px  solid #888;
}
.filter_item span {
  padding: 5px 10px;
  color: #000;
}
</style>
