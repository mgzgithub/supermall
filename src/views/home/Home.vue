<template>
  <div id="home">
    <nav-bar class="home-navbar"><template v-slot:centenslot><div>购物街</div></template></nav-bar>
    <scroll :probeType = "3" class="scroll-content" 
    ref="scroll" @scroll="monitorScroll"
    @pullingUp="loadMore">
      <home-swiper :banners="banners" />
      <re-commend-view :recommends="recommends" />
      <featrue-view />
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
      <goods-list :goodslist = "showGoods" />
    </scroll>
    <back-top v-show="isShowTop" @click.native="BackClick"/>
  </div>
</template>

<script>
//公共组件
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goodslist/GoodsList'
import BackTop from 'components/content/backtop/BackTop'


//本页面的组件
import HomeSwiper from './childrencpn/HomeSwiper'
import FeatrueView from './childrencpn/FeatrueView'
import ReCommendView from './childrencpn/ReCommendView'

//导入封装的方法。
import {GetRequestData,GetHomeGoods} from 'network/home'

export default {
  name:'Home',
  components:{
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    FeatrueView,
    ReCommendView
    
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShowTop:false
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  //生命周期函数，主页创建时就执行
  created(){
    //调用获取轮播图等数据的方法
    this.GetRequestData();
    
    //第一次创建时把 流行、新款、精选的数据都请求一页
    this.GetHomeGoods('pop');
    this.GetHomeGoods('new');
    this.GetHomeGoods('sell');
  },
  mounted() {
    //添加防抖函数
    const refresh = this.debounce(this.$refs.scroll.refresh,50)

    //图片加载完成就刷新一次,加了防抖之后就不会频繁执行了。
    this.$bus.$on('itemImageLoad',() => {
      //this.$refs.scroll.refresh();
      refresh();
    })
  },

  methods: {
    /**
     * 事件监听方法
     */
    //切换类型点击方法
    tabClick(index){
      //我怎么就想不到呢？
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },

    //调用回到顶部方法
    BackClick(){
      this.$refs.scroll.scrollTo(0,0,1000);
    },

    //监听滚动位置的方法
    monitorScroll(position){
      this.isShowTop = position.y < -1300
    },

    //上拉加载更多方法
    loadMore(){
      this.GetHomeGoods(this.currentType)
    },

    //防抖函数
    debounce(func,delay){
      let timer = null
      return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        }, delay);
      }
    },

    /**
     * 网络请求方法
     */
    //获取轮播图等数据。
    GetRequestData(){
        GetRequestData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    //获取首页数据方法 因为这里是抽离到methods封装，所以可以在外层传递参数，决定调用时查询哪个类型的数据
    GetHomeGoods(type){
      //动态获取数据页码：根据传进来的对应type获取到data对应的goods中的数组数据。然后获取他的页码，+1，代表了执行网络请求时，请求下一页的数据
      const page = this.goods[type].page +1
      //调用获取首页数据的封装方法,然后根据传进去的数据，.then执行网络请求
      GetHomeGoods(type,page).then(res => {
        //把请求到的数据赋值给data中的goods。并把页码+1
        //push(...res.data.list)解释：...代表了可以传入特别多个的数据，然后内部会依次将里面的元素一个一个取出并保存到对应数组中。
        //这样写的话代表 每次根据当前页码请求到的数据，都会依次追加到原来的list中。push的原义就是：在数组中添加新元素
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        //回调重复上拉加载
        this.$refs.scroll.finishPullUp();
      })
    },
  },
}
</script>

<style>

#home{
  position: relative;
  /* vh 代表可以获取当前对象视图大小的高度 100 = 100% */
  height: 100vh;
}

.home-navbar {
  background: #ff8e96;
  text-align: center;
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 39px;
  z-index: 2;
}
.scroll-content{
  position: absolute;
  top: 40px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>
