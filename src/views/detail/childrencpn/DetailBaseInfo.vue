<template>
<!-- 详情页基本信息与价格等组件 -->
  <div v-if="Object.keys(DetailGdList).length !==0" class="de-base-info">
    <div class="info-title">{{DetailGdList.title}}</div>
    <div class="info-price">
      <span class="new-price">{{DetailGdList.realPrice}}</span>
      <span class="old-price">{{DetailGdList.oldPrice}}</span>
      <span v-if="DetailGdList.discount" class="discount">{{DetailGdList.discount}}</span>
    </div>

    <div class="info-other">
      <span>{{DetailGdList.columns[0]}}</span>
      <span>{{DetailGdList.columns[1]}}</span>
      <span>{{DetailGdList.services[DetailGdList.services.length-1].name}}</span>
    </div>

    <div class="info-service">
      <span  class="info-ser-item" v-for="index in DetailGdList.services.length-1" :key = "index">
        <img v-if="DetailGdList.services[index-1].icon" :src="DetailGdList.services[index-1].icon" >
        <span v-if="DetailGdList.services[index-1].name !='延误必赔'">{{DetailGdList.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailBaseInfo',
    props:{
      DetailGdList:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>
  .de-base-info{
    margin-top: 15px;
    color: #999;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: #222;
  }
  .info-price{
    margin-top: 10px;
  }
  .new-price{
    font-size: 24px;
    color: #F794A2;
  }
  .old-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount{
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

  }

  .info-other{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    justify-content: space-between;
  }
  .info-service{
    text-align: center;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .info-ser-item img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
    margin-right: 3px;
  }
  .info-ser-item span{
    color: #333;
    font-size: 13px;
  }
</style>