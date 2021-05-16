<template>
  <div id="Cart">
    <nav-bar class="nav-bar">
      <template v-slot:centenslot><div>购物车（{{length}}）</div></template>
    </nav-bar>
    
    <scroll class="scroll">
      <cart-list/>
    </scroll>
    
    <cart-bottom-bar class="cart-bottom-bar"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import NavBar from 'components/common/navbar/NavBar'

import CartList from './childrencpn/CartList'
import CartBottomBar from './childrencpn/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  name:'Cart',
  components:{
    Scroll,
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    //mapGetters:辅助函数。作用是直接将vux中的getters的方法直接转成局部计算束胸
    //两种语法 1：...mapGetters(['name'])
    //如果想修改成自己的名字
    ...mapGetters({
      length:'cartLength'
    })
  }
}
</script>

<style scoped>
  
  #Cart{
    position: relative;
    height: 100vh;
  }
  .nav-bar{
    text-align: center;
    background: #FF8D97;
    color:#fff;
    font-weight: bold;
  }
  .scroll{
    position: absolute;
    top: 40px;
    bottom: 89px;
    left: 0;
    right: 0;
  }
</style>
