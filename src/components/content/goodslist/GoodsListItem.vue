<template>
<!-- 接受到大goodslist遍历传来的数据，定义成对象。然后一个个展示 -->
  <div class="goods-item">
    <img :src="goodsitem.show.img" alt="图片加载失败" @load="itemImgLoad">
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
    methods: {
      itemImgLoad(){
        this.$bus.$emit('itemImageLoad')
      }
    },
  }
</script>

<style>
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