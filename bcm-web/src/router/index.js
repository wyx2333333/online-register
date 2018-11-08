import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)
const router = new Router({
  mode: 'history', // 该模式下没有#前缀，而且可以使用pushState和replaceState来管理记录
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register,
      meta: {
        requiresLogin: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
