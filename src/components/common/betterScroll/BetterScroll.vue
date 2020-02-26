<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "BetterScroll",
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: {}
    };
  },
  watch: {
    data() {
      setTimeout(this.refresh, 200);
    }
  },
  computed: {},
  methods: {
    __initScroll() {
      //1.初始化BScroll对象
      if (!this.$refs.wrapper) return
      this.scroll = new BScroll(this.$refs.wrapper, {
        // (1) probeType：监听滚动的位置；可选值：1、2、3;
        probeType: this.probeType,
        // (2)click:默认值：false  better-scroll 默认会阻止浏览器的原生 click 事件。 当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
        click: true,
        // (3)pullUpLoad：默认值：false    如果需要监听滚动底部事件，设置为true
        pullUpLoad: this.pullUpLoad
      })

      //2.实时监听滚动位置
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      })

      //3.监听上拉到底部
      this.scroll.on("pullingUp", () => {
        console.log("到达底部");
        this.$emit("pullingUp");
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    }
  },
  created() {},
  mounted() {
    setTimeout(this.__initScroll, 200);
  }
};
</script>
<style scoped>
</style>
