import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/**
 * Lazy-loading routes
 */
const Updates = () => import('../views/Updates.vue');

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/updates',
    name: 'Updates',
    component: Updates
  }
]

const router = new VueRouter({
  routes
})

export default router
