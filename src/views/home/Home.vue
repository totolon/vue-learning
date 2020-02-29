<template>
  <div class="home">
    <NavBar class="nav-bar">
      <div slot="center">TOTOLON</div>
      <div class="filter" slot="right" @click="showSelector = !showSelector" >
        <NavFilter :options="['按热度','按时间','按评分']" :showSelector="showSelector" @optionClick="optionClick" />
      </div>
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
import NavFilter from "components/content/navFilter/NavFilter";
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
    NavFilter,
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
      showSelector: false,
      mtaList: {
        '电影': { params: {type: 'movie' ,tag: '热门' ,page_limit: 0, page_start: 0, sort: ''}, list: [] },
        '电视剧': { params: {type: 'tv' ,tag: '热门' ,page_limit: 0, page_start: 0, sort: ''}, list: [] },
        '日本动画': { params: {type: 'tv' ,tag: '日本动画' ,page_limit: 0, page_start: 0, sort: ''}, list: [] }
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
    optionClick(index) {
      this.mtaList[this.currentType].params.page_start = 0;
      this.mtaList[this.currentType].params.page_limit = 0;
      this.mtaList[this.currentType].list = [];
      switch (index) {
        case 0:
          this.mtaList[this.currentType].params.sort = 'recommend'
          break;
        case 1:
          this.mtaList[this.currentType].params.sort = 'time'
          break;
        case 2:
          this.mtaList[this.currentType].params.sort = 'rank'
      }
      this.getDataList(this.currentType)
    },
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
      this.$refs.scroll.scrollTo(0,0,500)
      console.log('置顶')
    },
    // getDataList(tag, page_limit, page_start) {
    //   getData(tag, page_limit, page_start).then(res => {
    //     this.mtaList[tag].list = res.data.subjects;
    //     this.$nextTick(() => {
    //         this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    //       })
    //     // console.log(res.data.subjects)
    //   });
    // },
    getDataList(type) {
      let length = this.mtaList[type].list.length
      this.mtaList[type].params.page_limit += 21
      this.mtaList[type].params.page_start +=length
      getData(this.mtaList[type].params).then(res => {
        this.mtaList[type].list.push(...res.data.subjects)
        //better-scroll完成一次上拉加载后，必须执行完成方法，才可以进行下一次上拉加载
        this.$refs.scroll.finishPullUp()
        this.$nextTick(() => {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
          })
        // console.log(res.data.subjects)
      });
    },
    loadMore() {
      this.getDataList(this.currentType)
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
    this.getDataList("电影");
    this.getDataList("电视剧");
    this.getDataList("日本动画");
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
.filter img {
  /* height: 28px;
  vertical-align: middle; */
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
