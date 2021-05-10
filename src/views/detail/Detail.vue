<template>
  <div id="Detail">
    <detail-nav-bar />
    <scroll class="de-scroll" ref="scroll">
      <detail-swiper :TopimgList="TopimgList" />
      <detail-base-info :DetailGdList="DetailGdList" />
      <detail-shop-info :shop="DetailSpList" />
      <detail-param-info :paramInfo="DeParamsInfo" />
      <detail-goods-info :detailInfo="DeMaxImgList" @imageLoad = "imageLoad"/>
    </scroll>
  </div>
</template>

<script>
//公共组件

import Scroll from "components/common/scroll/Scroll";

//本页面的组件
import DetailNavBar from "./childrencpn/DetailNavBar";
import DetailSwiper from "./childrencpn/DetailSwiper";
import DetailBaseInfo from "./childrencpn/DetailBaseInfo";
import DetailShopInfo from "./childrencpn/DetailShopInfo";
import DetailGoodsInfo from "./childrencpn/DetailGoodsInfo";
import DetailParamInfo from "./childrencpn/DetailParamInfo";

//网络请求方法
import { GetDetailData, DetailGoods, DetailShop, DeGoodsParam } from "network/detail";
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
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
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
      
    });
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  },
};
</script>

<style scoped>
  #Detail{
    height: 100vh;
    background-color: #fff;
  }
  .de-scroll{
    height: calc(100% - 40px);
  }
</style>>
  
</style>