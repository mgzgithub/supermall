import {request} from 'network/request'

export function GetRequestData(){
  return request({
    url:'http://123.207.32.32:8000/home/multidata'
  })
}