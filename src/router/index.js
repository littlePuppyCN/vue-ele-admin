import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    redirect: '/index',
    component: Home,
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import(/* webpackChunkName: "about" */ '../components/permission/user.vue')
      },
      {
        path: '/index',
        name: 'Index',
        component: () => import(/* webpackChunkName: "about" */ '../components/index/index.vue')
      },
      {
        path: '/guide',
        name: 'Guide',
        component: () => import(/* webpackChunkName: "about" */ '../components/guide/guide.vue')
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "about" */ '../components/permission/admin.vue')
      },
      {
        path: '/permission',
        name: 'Permission',
        component: () => import(/* webpackChunkName: "about" */ '../components/permission/permission.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
