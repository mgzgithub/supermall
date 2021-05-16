<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="图片加载失败" @load="swiperImgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"
export default {
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isLoadBool:true
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperImgLoad(){
      if(this.isLoadBool){
        this.$emit('swiperImgLoad')
        this.isLoadBool = false
      }
    }
  },
};
</script>

<style>
  .home-swiper{
    margin-top: 39.5px;
  }
</style>