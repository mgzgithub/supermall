<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    data() {
      return {
        descroll:null,
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpload:{
        type:Boolean,
        default:false
      }
    },
    //当页面初始化完成后执行
    mounted() {
      this.descroll = new Bscroll(this.$refs.wrapper,{
        click:true,
        mouseWheel:true,//pc鼠标滚轮可用
        probeType:this.probeType, //是否监听滚动？3表示全局监听包括惯性。2表示全局监听不包括惯性
        pullUpload:this.pullUpload,//监听上拉事件
        disableTouch: false,//可能版本太低不支持这个属性。pc初次打开移动端
      })
      
      //console.log(this.descroll.options.probeType);
      
      //监听滚动位置方法
      this.descroll.on('scroll',(position) => {
        //带参传出自定义监听滚动事件
        this.$emit('scroll',position)
      })

      //监听上拉事件
      this.descroll.on('pullingUp',() => {
        //带参传出自定义监听滚动事件
        this.$emit('pullingUp')
      })
    },
    methods: {
      //回到顶部方法封装
      //time参数的默认值是500ms，es6语法
      scrollTo(x,y,time=500){
        //前面确定下 this.descroll不为空 才会执行 && 后面的代码，相当于做了一次if
        this.descroll.scrollTo(x,y,time)
      },

      //上拉加载更多回调封装
      finishPullUp(){
        this.descroll.finishPullUp();
      },

      //图片加载完成刷新方法封装
      refresh(){
        this.descroll.refresh();
      },

      //获取离开位置方法封装
      getScrollY(){
        return this.descroll ? this.descroll.y : 0
      }
    },
  }
</script>