<template>
  <div id="Detail">
    <detail-nav-bar @NavTabClick = "NavTabClick" ref="navbar" />
    <scroll class="de-scroll" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :TopimgList="TopimgList" />        <!-- 轮播图组件 -->
      <detail-base-info :DetailGdList="DetailGdList" /> <!-- 商品信息组件 -->
      <detail-shop-info :shop="DetailSpList" />         <!-- 店铺信息组件 -->
      <detail-comment-info ref="comment" :commentInfo="Commentinfo" /><!-- 评价组件 -->
      <detail-param-info :paramInfo="DeParamsInfo" />   <!-- 参数尺码组件 -->
      <detail-goods-info ref="goods" :detailInfo="DeMaxImgList" @imageLoad = "imageLoad"/>  <!-- 详情图组件 -->
      <goods-list ref="recommend" :goodslist = "DetailRecommend"/>        <!-- 推荐信息组件 直接用首页的 -->
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addToCart = "addToCart"/>        <!-- 底部栏 -->
    <back-top v-show="isShowTop" @click.native="BackClick"/>
  </div>
</template>

<script>
//公共组件

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goodslist/GoodsList";

//本页面的组件
import DetailNavBar from "./childrencpn/DetailNavBar";
import DetailSwiper from "./childrencpn/DetailSwiper";
import DetailBaseInfo from "./childrencpn/DetailBaseInfo";
import DetailShopInfo from "./childrencpn/DetailShopInfo";
import DetailGoodsInfo from "./childrencpn/DetailGoodsInfo";
import DetailParamInfo from "./childrencpn/DetailParamInfo";
import DetailCommentInfo from "./childrencpn/DetailCommentInfo";
import DetailBottomBar from "./childrencpn/DetailBottomBar";

//导入网络请求或其他方法
import { GetDetailData, DetailGoods, DetailShop, DeGoodsParam, GetRecommend } from "network/detail";
import {itemListenerMixin,backTopMixin} from 'common/mixin'
export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      TopimgList: [],
      DetailGdList: {},
      DetailSpList: {},
      DeMaxImgList:{},
      DeParamsInfo:{},
      Commentinfo:{},
      DetailRecommend:[],
      getCpnTopY:[],
      currentIndex:0
    }
  },
  components: {
    Scroll,
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
  },
  created() {
    this.iid = this.$route.params.iid;
    GetDetailData(this.iid).then((res) => {
      //console.log(res);
      const data = res.result;
      //请求服务器获取轮播图
      this.TopimgList = data.itemInfo.topImages;

      //请求获取商品信息
      this.DetailGdList = new DetailGoods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //请求获取店铺信息
      this.DetailSpList = new DetailShop(data.shopInfo);

      //请求获取商品的详情图片等数据
      this.DeMaxImgList = data.detailInfo

      //请求获取店铺信息
      this.DeParamsInfo = new DeGoodsParam(data.itemParams.info,data.itemParams.rule);
      
      //请求获取评论信息
      if(data.rate.cRate !== 0){
        this.Commentinfo = data.rate.list[0]
      }
      
    });

    //请求获取推荐recommend
    GetRecommend().then(res => {
      this.DetailRecommend = res.data.list
    })
  },
  mixins:[itemListenerMixin,backTopMixin],
  //销毁时取消监听加载。
  destroyed() {
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods: {
    //详情图刷新
    imageLoad(){
      this.$refs.scroll.refresh()

      //获取组件的顶部距离
      let Y = this.getCpnTopY
      Y.push(0)
      Y.push(this.$refs.comment.$el.offsetTop)
      Y.push(this.$refs.goods.$el.offsetTop)
      Y.push(this.$refs.recommend.$el.offsetTop)
    },
    //Tab点击切换位置方法
    NavTabClick(index){
      this.$refs.scroll.scrollTo(0,-this.getCpnTopY[index],200)
    },
    //根据位置切换对应tab颜色方法
    contentScroll(position){
      this.BackTopShow(position);
      let onY = -position.y//获取y值

      if (onY < this.getCpnTopY[1]) {
        this.$refs.navbar.currentIndex = 0
      }
      else if (onY >= this.getCpnTopY[1] && onY < this.getCpnTopY[2]) {
        this.$refs.navbar.currentIndex = 1
      }
      else if (onY >= this.getCpnTopY[2] && onY < this.getCpnTopY[3]) {
        this.$refs.navbar.currentIndex = 2
      }
      else if (onY >= this.getCpnTopY[3]) {
        this.$refs.navbar.currentIndex = 3
      }
    },
    //点击加入购物车
    addToCart(){
      const product = {
        image : this.TopimgList[0],
        title : this.DetailGdList.title, 
        desc : this.DetailGdList.desc,
        price : this.DetailGdList.realPrice,
        iid : this.iid
      }
      console.log(product);
    }
  },
};
</script>

<style scoped>
  #Detail{
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 4;
  }
  .de-scroll{
    height: calc(100% - 60px);
  }
</style>>
  
</style>