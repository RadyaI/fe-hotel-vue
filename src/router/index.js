import Vue from 'vue'
import VueRouter from 'vue-router'

// public
import DashboardPublic from '../views/public/Dashboard.vue'
import Check from '../views/public/Check.vue'
import Feedback from '../views/public/Feedback.vue'
import Notfound from '../views/idk_page/Notfound.vue'
import Print from '../views/public/Print.vue'

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
  },
  {
    path: '/print/:nama',
    component: Print
  },
  // =======> Public Route End <=======

  // =======> Special Route <========
  {
    path: '*',
    component: Notfound
  },
  // =======> Special Route End <========
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
