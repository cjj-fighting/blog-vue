import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tset',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name:'Login',
      component: () => import('@/view/login.vue')
    },{
      path: '/register',
      name:'Register',
      component: () => import('@/view/register.vue')
    },{
      path: '/',
      name: 'Index',
      component: () => import('@/view/index.vue')
    },{
      path: '*',
      name: '404',
      component: () => import('@/view/404.vue')
    }
  ]
})
