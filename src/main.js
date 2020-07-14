import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import axios from 'axios'
Vue.prototype.axios = axios

// axios.defaults.baseURL = 'https://www.fastmock.site/mock/7ff7ba8b60619bef6fd647ceec01169a/admin'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
