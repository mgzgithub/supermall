<template>
  <div class="goods">
    <!-- 遍历好数据 传给item展示 -->
    <goods-list-item v-for="item in goodslist" :goodsitem = "item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name:'GoodsList',
    props:{
      goodslist:{
        type:Array,
        default:[]
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;/* 让flex布局可以换行 */
    /* 间距均等分，中间的间隙是两边留白的2倍 */
    justify-content: space-around;
    padding: 2;
  }
</style>