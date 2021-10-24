import Page1 from "../pages/Page1/index";
import Page2 from "../pages/Page2/index";

const MENU_LIST = [
  {
    path: '/page1',
    name: 'Page1',
    component: Page1,
    meta: {
      title: '实力列表'
    }
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2,
    meta: {
      title: '全球分布'
    }
  },
  {
    path: '/page3',
    name: 'Page3',
    children: [
      {
        path: '/page3/page4',
        name: 'Page4',
        component: Page2,
        meta: {
          title: '发生时间'
        }
      },
      {
        path: '/page3/page5',
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

export {
  MENU_LIST,
}