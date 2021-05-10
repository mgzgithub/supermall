<template>
  <nav-bar class="DetailNavBar">
    <template v-slot:leftslot>
      <img src="~assets/img/common/back.svg" @click="DetailbackCk">
    </template>
    <template v-slot:centenslot>
      <div class="De-title">
        <div v-for="(item,index) in titles" 
            class="De-title-item"
            :class="{DeActive:index === currentIndex}"
            @click="DeActiveClass(index)">
          {{item}}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods: {
    DeActiveClass(index){
      this.currentIndex = index
    },
    DetailbackCk(){
      this.$router.back()
    },
  },
}
</script>
  
<style>

  .DetailNavBar{
    background-color: #fff;
    text-align: center;
  }
  .De-title{
    display: flex;
  }
  .De-title-item{
    font-size: 12px;
    flex:4;
  }
  .DeActive{
    color: #F794A2;
  }
  .DetailNavBar img{
    width: 23px;
    height: 23px;
    margin-top: 8px;
  }
</style>