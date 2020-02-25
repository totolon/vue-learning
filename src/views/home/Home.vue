<template>
  <div class="home">
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>
    <TabControl class="fixed" v-show="isTabFixed" :titles="['电影', '电视剧', '动漫']" @typeClick="typeClick" />
    <Scroll
      class="wrapper"
      :data="showMtaList"
      :pull-up-load="true"
      :probe-type="3"
      @pullingUp="loadMore"
      @scroll="contentScroll"
    >
      <div class="content">
        <HomeSwiper :banners="banners" />
        <TabControl ref="tabControl" class="tab-control" :titles="['电影', '电视剧', '动漫']" @typeClick="typeClick" />
        <List :list="showMtaList" />
      </div>
    </Scroll>
  </div>
</template>

<script>
import TabControl from "components/content/tabControl/TabControl";

import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import Scroll from "components/common/scroll/Scroll";
import List from "./childComps/List";

import { getData } from "network/douban/data";
import { getHomeMultidata } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    Scroll,
    TabControl,
    List
  },
  data() {
    return {
      banners: [],
      currentType: "电影",
      tabOffsetTop: 0,
      isTabFixed: false,
      mtaList: {
        电影: { page: 1, list: [] },
        电视剧: { page: 1, list: [] },
        日本动画: { page: 1, list: [] }
      }
    };
  },
  methods: {
    typeClick(index) {
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
    },
    getDataList(type, page_limit, page_start) {
      getData(type, page_limit, page_start).then(res => {
        this.mtaList[type].list = res.data.subjects;
        this.$nextTick(() => {
            this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
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
}
.nav-bar {
  background-color: #513669;
  font-weight: 700;
  color: #fff;
}
.wrapper {
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
.tab-control {
  /* position: sticky;
  top: 44px; */
}
</style>
