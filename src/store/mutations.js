import {
  ADD_COUNTER,
  ADD_TO_CART
  } from './mutations-types'

export default {
  //mutations唯一的目的就是跟踪修改state中的状态，所以要尽可能让藜麦你的每个方法做的事都单一一点
  //所以之前在这的带有一些复杂逻辑的，也可以放到actions中而不仅仅是异步操作
  [ADD_COUNTER](state,payload){
    payload.count += 1
  },
  [ADD_TO_CART](state,payload){
    state.cartList.push(payload)
  }
}