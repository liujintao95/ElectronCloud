import Vue from 'vue'
import VueRouter from 'vue-router'
import Private from '../views/Private.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Private',
    component: Private
  },
  {
    path: '/public',
    name: 'Public',
    component: () => import('../views/Public.vue')
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
