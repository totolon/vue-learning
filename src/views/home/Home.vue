<template>
  <div class="home">
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>
    <TabControl ref="tabControl1" class="fixed" v-show="isTabFixed" :titles="['电影', '电视剧', '动漫']" @typeClick="typeClick" />
    <BetterScroll
      class="scroll-content"
      ref="scroll"
      :data="showMtaList"
      :pull-up-load="true"
      :probe-type="3"
      @pullingUp="loadMore"
      @scroll="contentScroll"
    >
      <HomeSwiper :banners="banners" />
        <TabControl ref="tabControl2" class="tab-control" :titles="['电影', '电视剧', '动漫']" @typeClick="typeClick" />
        <List :list="showMtaList" />
    </BetterScroll>
    <BackTop @backTop="backTop" class="back-top" v-show="showBackTop">
      <img src="~assets/img/common/top.png" alt="">
    </BackTop>
  </div>
</template>

<script>
import TabControl from "components/content/tabControl/TabControl";

import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import BetterScroll from "components/common/betterScroll/BetterScroll";
import List from "./childComps/List";
import BackTop from "components/content/backTop/BackTop"

import { getData } from "network/douban/data";
import { getHomeMultidata } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    BetterScroll,
    TabControl,
    List,
    BackTop
  },
  data() {
    return {
      banners: [],
      currentType: "电影",
      currentIndex: 0,
      tabOffsetTop: 0,
      isTabFixed: false,
      showBackTop: false,
      mtaList: {
        电影: { page: 1, list: [] },
        电视剧: { page: 1, list: [] },
        日本动画: { page: 1, list: [] }
      }
    };
  },
  watch: {
    currentType(val,oldVal) {
      this.$refs.tabControl1.itemClick(this.currentIndex)
      this.$refs.tabControl2.itemClick(this.currentIndex)
    }
  },
  methods: {
    typeClick(index) {
      this.currentIndex = index
      switch (index) {
        case 0:
          this.currentType = "电影";
          break;
        case 1:
          this.currentType = "电视剧";
          break;
        case 2:
          this.currentType = "日本动画";
      }
    },
    contentScroll(position) {
      // 1.决定tabFixed是否显示
      this.isTabFixed = position.y < -this.tabOffsetTop
      this.showBackTop = -position.y > 600
    },
    backTop() {
      this.$refs.scroll.scrollTo(0,0,1500)
      console.log('置顶')
    },
    getDataList(type, page_limit, page_start) {
      getData(type, page_limit, page_start).then(res => {
        this.mtaList[type].list = res.data.subjects;
        this.$nextTick(() => {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
          })
        // console.log(res.data.subjects)
      });
    },
    loadMore() {
      console.log("首页组件加载更多");
    }
  },
  computed: {
    showMtaList() {
      return this.mtaList[this.currentType].list;
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
    });
    this.getDataList("电影", 21, 0);
    this.getDataList("电视剧", 21, 0);
    this.getDataList("日本动画", 21, 0);
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: #513669;
  font-weight: 700;
  color: #fff;
}
.scroll-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.fixed {
  position: fixed;
  top: 43px;
  left: 0;
  right: 0;
  z-index: 10;
}
.active {
  z-index: 10;
}
/* .tab-control {
  position: sticky;
  top: 44px;
} */
.back-top {
  height: 43px;
  width: 43px;
  position: fixed;
  bottom: 54px;
  right: 5px;;
}
.back-top img {
  height: 100%;
  width: 100%;
}
</style>
