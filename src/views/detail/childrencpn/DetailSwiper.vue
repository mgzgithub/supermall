<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in TopimgList">
        <img :src="item" alt="图片加载失败"/>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"
export default {
  props: {
    TopimgList: {
      type: Array,
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
  .detail-swiper{
    margin-top: 41px;
    height: 300px;
  }
</style>