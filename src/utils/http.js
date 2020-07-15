import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
// axios配置
axios.defaults.timeout = 8000
// axios.defaults.baseURL = 'https://www.fastmock.site/mock/7ff7ba8b60619bef6fd647ceec01169a/admin'

// http 请求拦截器
axios.interceptors.request.use(
  config => {
    // token是否存在
    if (localStorage.token) {
      // 将token设置为请求头
      config.headers.Authorization = localStorage.token
      console.log(config.headers)
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.tokenErr) {
      router.replace('/')
      Message.error('token guoqi, please login again')
    }
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
