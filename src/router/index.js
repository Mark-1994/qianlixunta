import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Index from '../components/Index.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/basicinformation',
      component: () => import('@/components/Basicinformation')
    },
    {
      path: '/hongniang',
      component: () => import('@/components/Hongliang')
    },
    {
      path: '/hongniang_pay',
      component: () => import('@/components/Hongniang_pay')
    },
    {
      path: '/weixin_pay',
      component: () => import('@/components/Weixin_pay')
    }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to.path);
  // console.log(from);
  // console.log(next);
  if (to.path == '/login') next();
  next();
})

export default router
