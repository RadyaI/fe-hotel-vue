import Vue from 'vue'
import VueRouter from 'vue-router'
import Tes from '../views/Tes.vue'

// public
import DashboardPublic from '../views/public/Dashboard.vue'
import Check from '../views/public/Check.vue'
import Feedback from '../views/public/Feedback.vue'
import userHistory from '../views/public/userHistory.vue'
import Notfound from '../views/idk_page/Notfound.vue'
import unauthorized from '../views/idk_page/unauthorized.vue'
import Print from '../views/public/Print.vue'

import Login from '../views/Login.vue'
import signUp from '../views/signUp.vue'

// Admin
import manageUser from '../views/admin/manageUser.vue'
import manageRoom from '@/views/admin/manageRoom.vue'
import feedback from '@/views/admin/feedback.vue'
import roomNumber from '@/views/admin/roomNumber.vue'

// Resepsionis
import ResepConfirm from '../views/resepsionis/Confirm.vue'
import Checkin from '../views/resepsionis/Checkin.vue'
import Checkout from '../views/resepsionis/Checkout.vue'
import history from '../views/resepsionis/History.vue'

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
    path: '/history/user',
    component: userHistory
  },
  {
    path: '/print/:nama',
    component: Print
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signUp',
    component: signUp
  },
  // =======> Public Route End <=======

  // =======> Admin Route <=======
  {
    path: '/admin',
    component: manageUser,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/room',
    component: manageRoom,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/admin/feedback',
    component: feedback,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/roomnumber',
    component: roomNumber,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  // =======> Admin Route End <=======

  // =======> Resepsionis Route <=======
  {
    path: '/resepsionis',
    component: ResepConfirm,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  {
    path: '/checkin',
    component: Checkin,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  {
    path: '/checkout',
    component: Checkout,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  {
    path: '/history',
    component: history,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  // =======> Resepsionis Route End <=======

  // =======> Special Route <========
  {
    path: '*',
    component: Notfound
  },
  {
    path: '/lol',
    component: unauthorized
  },
  // =======> Special Route End <========
  {
    path: '/tes',
    component: Tes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  if (to.meta.requiresAuth && !token) {
    next({
      path: '/login'
    })
  } else if (to.meta.allowedRoles && !to.meta.allowedRoles.includes(role)) {
    next({
      path: '/lol'
    })
  } else {
    next()
  }

})