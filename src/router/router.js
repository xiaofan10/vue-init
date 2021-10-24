import Vue from 'vue'
import VueRouter from "vue-router"
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/page1'
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3,
    children: [
      {
        path: 'page4',
        name: 'Page4',
        component: Page1,
        meta: {
          title: '发生时间'
        }
      },
      {
        path: 'page5',
        name: 'Page5',
        component: Page2,
        meta: {
          title: '发生地点'
        }
      },
    ],
    meta: {
      title: '历史事件'
    }
  },
]

const Router =  new VueRouter({
  routes
})

export default Router