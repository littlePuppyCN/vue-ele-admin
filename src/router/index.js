import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Message } from 'element-ui'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/guide',
        name: 'Guide',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/guide/guide.vue')
      },
      {
        path: '/drag',
        name: 'Drag',
        component: () => import(/* webpackChunkName: "about" */ '../components/draggable/index.vue')
      },
      {
        path: '/index',
        name: 'Index',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/index/index.vue')
      },
      {
        path: '/user',
        name: 'User',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/permission/user.vue')
      },
      {
        path: '/admin',
        name: 'Admin',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/permission/admin.vue')
      },
      {
        path: '/permission',
        name: 'Permission',
        component: () => import(/* webpackChunkName: "about" */ '../components/permission/permission.vue')
      },
      {
        path: '/ordinary',
        name: 'Ordinary',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/table/ordinary.vue')
      },
      {
        path: '/complicate',
        name: 'Complicate',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/table/complicate.vue')
      },
      {
        path: '/slide',
        name: 'Slide',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/echarts/slide.vue')
      },
      {
        path: '/switch',
        name: 'Switch',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/echarts/switch.vue')
      },
      {
        path: '/map',
        name: 'Map',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/echarts/map.vue')
      },
      {
        path: '/import',
        name: 'Import',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/excel/import.vue')
      },
      {
        path: '/export',
        name: 'Export',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/excel/export.vue')
      },
      {
        path: '/upload',
        name: 'Upload',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../components/mycomponents/uploadpic.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // 判断要跳转的路由是否需要权限
  if (to.meta.requiresAuth) {
    // 判断用户token是否过期
    if (localStorage.token) {
      // console.log('token exist')
      next()
    } else {
      Message.error('token guoqi, please login again')

      // console.log('token not exist')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else { // 如果都存在 直接进入目标路由
    next()
  }
})

export default router
