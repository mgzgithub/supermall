<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="图片加载失败">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 30px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 68px;
    height: 68px;
    margin-bottom: 6px;
  }
</style>