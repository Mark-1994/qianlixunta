import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
// 引入阿里字体图标文件
import '@/assets/icon/iconfont.css'

// 配置全局axios默认值
axios.defaults.baseURL = 'http://admin.qianlixunta.com'

// 请求拦截器
axios.interceptors.request.use(function(config) {
  // console.log(config.headers.mytoken = 'abc');  // 配置请求头
  return config;
}, function(error) {
  return error;
});
// 响应拦截器
axios.interceptors.response.use(function(res) {
  return res.data;
}, function(err) {
  return err;
});

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
