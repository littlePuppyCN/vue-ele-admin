import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/mock/mock.js'
import http from '@/utils/http.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.axios = http

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
