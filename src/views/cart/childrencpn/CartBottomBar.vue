<template>
  <div id="cart-bottom-bar">
    <div class="leftbox">
      <check-button :isChecked = "isCheckedAll" @click.native="BtnChecked" class="check-class"/>
      <span>全选</span>
    </div>
    
    <div class="centenbox">
      合计：{{totalPrice}}
    </div>

    <div class="rightbox" @click="calcClick">
      去计算:({{checkedLength}})
    </div>
  </div>
</template>
<script>

  import CheckButton from 'components/content/chackbutton/CheckButton'

  import { mapGetters } from 'vuex'
  export default {
    name:'CartBottomBar',
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue,item) => {
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      checkedLength(){
        return this.cartList.filter(item => item.checked).length
      },
      isCheckedAll(){
        if (this.cartList.length === 0) return false 
        //有很多实现的方法，filter 、 find 、 for循环遍历判断都可以
        return !(this.cartList.filter(item => !item.checked).length > 0)
      }
    },
    methods: {
      //全选按钮方法
      BtnChecked(){
        if (this.isCheckedAll) {
          this.cartList.forEach(item => item.checked = false);
        }
        else{
          this.cartList.forEach(item => item.checked = true);
        }
      },
      calcClick(){
        if (this.checkedLength === 0) {
          this.$toast.show('请选择一项要购买的商品',2000)
        }
        else{
          this.$toast.show('收手吧，阿祖',2000)
        }
        
      }
    },
  }
</script>

<style scoped>
  #cart-bottom-bar{
    border-top: 1px solid #eee;
    background: #fff;
    text-align: center;
    height: 40px;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .leftbox,.rightbox{
    width: 25%;
  }
  .rightbox{
    background: #FF8D97;
    line-height: 39px;
    color: #fff;
  }
  .leftbox span{
    display: inline-block;
    position: relative;
    top: -8px;
    left: 10px;
  }
  .check-class{
    position: relative;
    top: 10px;
    left: 10px;
  }
</style>