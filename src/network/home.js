import {request} from 'network/request'

export function GetRequestData(){
  return request({
    url:'http://123.207.32.32:8000/home/multidata'
  })
}

export function GetHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}