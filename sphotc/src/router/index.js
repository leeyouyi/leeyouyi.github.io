import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Buy',
    name: 'Buy',
    component: () => import('@/views/Buy.vue')
  },
  {
    path: '/Sign_in',
    name: 'Sign_in',
    component: () => import('@/views/Sign_in.vue')
  },

  {
    path: '/Registered',
    name: 'Registered',
    component: () => import('../views/Registered.vue')
  },
  {
    path: '/Entrance',
    name: 'Entrance',
    component: () => import('@/views/Entrance.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
