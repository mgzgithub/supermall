import Toast from './Toast'

const obj = {}
//创建一个对象，新建一个函数
obj.install = function(Vue){
  //1、创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //2、new组件构造器，把值传给一个对象
  const toast = new toastContrustor
  //3、将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4、toast.$el对应的就是上面创建的div,把它追加给body
  document.body.appendChild(toast.$el)
  //创建插件
  Vue.prototype.$toast = toast;

}
export default obj