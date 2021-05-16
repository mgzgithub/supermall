import {
  ADD_COUNTER,
  ADD_TO_CART
  } from './mutations-types'

export default {
  addCart(context,payload){
    //添加时首先要判断我们之前的cartList有没有该商品。如果有就给他count+1，而不是再次添加商品

    //第一种方法可以用for循环遍历原数组循环判断
    /* let oldProduct = null
    //循环遍历数组记得要用ofofof。因为in不能拿到数组本身元素，只能拿索引
    for (let item of state.cartList) {
      if (item.iid === payload.iid) {
        oldProduct = item
      }
    }
    if (oldProduct != null) {
      oldProduct.count += 1
      console.log('not null');
    }
    else{
      payload.count = 1
      state.cartList.push(payload)
      console.log('null');
    } */

    //方法二 使用indexOf查iid是否=payload.iid，或者使用find方法.
    //indexOf与find两者区别，前一个主要用于字符串，后者多用于数组
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct != null) {
        //oldProduct.count += 1
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前商品+1')
      }
      else{
        payload.count = 1
        payload.checked = true
        //context.state.cartList.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve('新添加购物车成功！')
      }
    })
  }
}