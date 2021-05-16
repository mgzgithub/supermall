<template>
<!-- 接受到大goodslist遍历传来的数据，定义成对象。然后一个个展示 -->
  <div class="goods-item" @click="GdItemClick">
    <img :src="showImage" @load="itemImgLoad">
    <div>
      <p>{{goodsitem.title}}</p>
      <p><span>{{goodsitem.orgPrice}}</span><span id="icon">{{goodsitem.cfav}}</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'GoodsListItem',
    props:{
      goodsitem:{
        type:Object,
        default:{}
      },
    },
    computed:{
      showImage(){
        //如果前面为空 就返回后面的 
        return this.goodsitem.image || this.goodsitem.show.img
      }
    },
    methods: {
      itemImgLoad(){
        //我们点击进入详情页之后。首页已不再展示。但是我们首页依旧在接收这个事件
        //影响性能。怎么让我点击详情页之后就让首页不再监听这个事件。然后改为详情页监听？
        //首先 判断当前路由活跃然后发出不同事件是一种方法：
        /* if(this.$route.push.indexOf('/home')){
          this.$bus.$emit('homeItemImageLoad')
        }else if(this.$route.push.indexOf('/detail')){
          this.$bus.$emit('detailItemImageLoad')
        } */

        //第二种方法：混入mixin
        this.$bus.$emit('itemImageLoad')
      },
      GdItemClick(){
        this.$router.push('/Detail' + this.goodsitem.iid)
      }
    },
  }
</script>

<style scoped>
  .goods-item{
    text-align: center;
    width: 48%;
    padding-bottom: 10px;
  }
  .goods-item img{
    border-radius: 5px;
    width: 100%;
  }
  .goods-item p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
  .goods-item span{
    color: #F794A2;
    padding-right: 30px;
  }
  #icon{
    position: relative;
    color: #666;
  }
  /* 创建一个伪元素 */
  #icon::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>