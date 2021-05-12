import {debounce} from './utils'
//导出的是对象 
//把图片防抖功能函数封装成全局minxin对象。
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null,
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh,50)
    this.itemImgListener = () => {
      newRefresh();
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}

//回到顶部功能函数封装混入
import BackTop from 'components/content/backtop/BackTop'
export const backTopMixin = {
  data() {
    return {
      isShowTop:false,
    }
  },
  components:{
    BackTop
  },
  methods: {
    //调用回到顶部方法
    BackClick(){
      this.$refs.scroll.scrollTo(0,0,1000);
    },
    BackTopShow(position){
      this.isShowTop = position.y < -1300
    }
  },
  
}