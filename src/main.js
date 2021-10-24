import Vue from 'vue'
import store from './store'
import axios from './api/request'
import Router from './router/router.js'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false


Vue.$http = axios
axios.get('/api/getList').then((res) => {
  console.log(res)
})

new Vue({
  router: Router,
  store,
  render: h => h(App),
}).$mount('#app')
