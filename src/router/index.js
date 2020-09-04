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
      path: '/hongniang_pay/:id/:type',
      component: () => import('@/components/Hongniang_pay')
    },
    {
      path: '/weixin_pay/:order_id/:type/:super_vip_id',
      component: () => import('@/components/Weixin_pay')
    },
    {
      path: '/hongniang_list',
      component: () => import('@/components/Hongniang_list')
    },
    {
      path: '/message_list',
      component: () => import('@/components/Message_list')
    },
    {
      path: '/release_information',
      component: () => import('@/components/Release_information')
    },
    {
      path: '/yueba',
      component: () => import('@/components/Yueba')
    },
    {
      path: '/search',
      component: () => import('@/components/Search')
    },
    {
      path: '/join_member',
      component: () => import('@/components/Join_member')
    },
    {
      path: '/article_article/:id',
      component: () => import('@/views/Article_article')
    },
    {
      path: '/article_list',
      component: () => import('@/views/Article_list')
    },
    {
      path: '/other_user',
      component: () => import('@/views/Other_user')
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
