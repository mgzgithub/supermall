<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name:'Toast',
    data() {
      return {
        message:"",
        isShow:false
      }
    },
    methods: {
      show(msg = '提示',time = 2000){
        this.isShow = true
        this.message = msg
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, time);
      }
    },
  }
</script>

<style scoped>
  .toast{
    position:fixed;
    /* 页面快速居中定位写法 */
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px 12px;
    background: rgba(0, 0, 0, .5);
    color: #fff;
    font-size: 14px;
    z-index: 5;
    border-radius: 4px;
    word-break: keep-all;
  }
</style>