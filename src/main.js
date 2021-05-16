import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
//创建$bus
Vue.prototype.$bus = new Vue();
//安装toast
Vue.use(toast)
//安装图片懒加载
Vue.use(VueLazyload)
// 配置项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/img/common/loading.gif'),
  error: require('./assets/img/common/err.jpg'),
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
