<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="item" @click="itemClick(index)">
      <span :class="{active: currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    titles: {
      type: Array
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('typeClick',index)
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.tab-control {
  display: flex;
  background-color: #fff;
  margin-bottom: 8px;
  border-bottom: 1px solid #999;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span {
  padding: 9px;
}
.active {
  color: cornflowerblue;
  border-bottom: 2px solid cornflowerblue
}
</style>
