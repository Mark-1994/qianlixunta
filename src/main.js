import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
// 引入阿里字体图标文件
import '@/assets/icon/iconfont.css'
import wx from 'weixin-js-sdk'

// 配置全局axios默认值
axios.defaults.baseURL = 'http://admin.qianlixunta.com'

// 请求拦截器
axios.interceptors.request.use(function(config) {
  // console.log(config.headers.mytoken = 'abc');  // 配置请求头
  // config.headers['content-type'] = 'application/x-www-form-urlencoded'
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

Vue.use(wx)
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// 时间过滤
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  // return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  return `${m}-${d}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
