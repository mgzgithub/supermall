import axios from 'axios'

//封装方法3、 promise方式终极方案
//config：调用者传递url等
export function request(config) {
  //创建axios实例，每个实例对应不同的配置
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //-----------------------拦截器-------------------------
  // instance.interceptors.request.use(config => {
  //   return config
  // },err => {
  //   console.log(err);
  // })

  //2、响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  })
  //-----------------------拦截器-------------------------



  //发送网络请求
  //原理：因为axios的本质类型就是promise，所以没有必要自己在写一套.then和catch。
  //所以直接return回去给调用者，让调用者自己写then和catch就好了
  return instance(config)
}
