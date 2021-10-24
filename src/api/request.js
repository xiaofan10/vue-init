import axios from 'axios'
import store from '../store' // 清除token使用
import Router from '../router/router.js'
import {Notification} from 'element-ui'
const AUTH_TOKEN = ''  // 后端获取后存到本地
console.log(Router,'路由')
axios.defaults.baseURL = `http://localhost:3000`
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器 在发送请求之前做些什么
axios.interceptors.request.use((config) => {
  store.commit('startLoading')
  return config;
})
// 添加响应拦截器
axios.interceptors.response.use((response) => {
  store.commit('finishLoading')
  // 返回200为状态成功，否则抛出错误
  if(response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, (err)=>{

  Notification.error({
    message: '<div>' +
      '<h3>' + err + '</h3>' +
      '</div>',
    dangerouslyUseHTMLString: true,
  })
 if(err.response.status) {
    switch(err.response.status) {
      case 401:
        // 未登录，返回登录页
        break;
      case 403:
        // token 过期，清除所有token相关信息跳转登录页
        Router.replace('/page2')
        break;
      case 404:
        // 请求不存在
        break;
      default:
    }
    return Promise.reject(err.response)
 }
  // 对响应错误做点什么
  return Promise.reject(err);
})

export default axios
