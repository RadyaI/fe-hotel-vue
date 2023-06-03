import Vue from 'vue'
import VueRouter from 'vue-router'

// public
import DashboardPublic from '../views/public/Dashboard.vue'
import Check from '../views/public/Check.vue'
import Feedback from '../views/public/Feedback.vue'

Vue.use(VueRouter)

const routes = [
  // =======> Public Route <=======
  {
    path: '/',
    component: DashboardPublic
  },
  {
    path: '/check',
    component: Check
  },
  {
    path: '/feedback',
    component: Feedback
  }
  // =======> Public Route <=======
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
