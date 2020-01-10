<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon-active" v-if="isactive"></slot>
    <slot name="item-icon" v-else></slot>
    <div  :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      default: '#ff5777'
    }
    // imgUrl: {
    //   type: String,
    //   required: true
    // },
    // iconName: {
    //   type: String,
    //   required: true
    // }
  },
  data() {
    return {
    };
  },
  watch: {},
  computed: {
    isactive() {
      return this.$route.path == this.path
    },
    activeStyle() {
      return this.isactive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
  created() {
  },
  mounted() {}
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item:active {
  background-color: rgba( 204, 204, 204, 0.2);
}
.tab-bar-item img {
  width: 24px;
  /* height: 24px; */
  vertical-align: middle;
  margin-top: 3px;
}
.active {
  color: #ff5777;
}
</style>
