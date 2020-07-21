import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
