<template>
  <div>
    <nav-bar class="home-navbar">
      <template v-slot:centenslot><div>购物街</div></template>
    </nav-bar>
    <home-swiper :banners = "banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childrencpn/HomeSwiper'
import {GetRequestData} from 'network/home'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  created(){
    GetRequestData().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
  .home-navbar{
    background: #FF8E96;
    text-align: center;
    color: #fff;
  }
</style>
