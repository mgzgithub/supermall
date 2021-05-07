<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"
    @click="itemClick(index)" :class="{active:isindex==index}" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      titles:{
        type:Array,
        default:[]
      }
    },
    data() {
      return {
        isindex:0
      }
    },
    methods: {
      itemClick(index){
        this.isindex=index;
        //因为要监听分类的点击，但是他又是个组件。子组件向往外传数据就要用到自定义事件$emit
        this.$emit('tabClick',index)
      }
    },  
  }
</script>

<style>
  .tab-control{
    display: flex;
    height: 45px;
    line-height: 45px;
    background: #fff;
    text-align: center;
    font-size: 15px;
  }
  .tab-control-item{
    flex: 3;
  }
  .active span{
    padding: 5px;
    color: #F794A2;
    border-bottom: 2px solid #F794A2;
  }
</style>