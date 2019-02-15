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
      path: '/article/add',
      name: 'ArticleAdd',
      component: () => import('@/view/articleAdd.vue')
    },{
      path: '/article/info',
      name: 'ArticleInfo',
      component: () => import('@/view/articleInfo.vue')
    },{
      path: '/user/info',
      name: 'UsersInfo',
      component: () => import('@/view/usersInfo.vue')
    },{
      path: '/tags/list',
      name: 'TagsList',
      component: () => import('@/view/tagsList.vue')
    },{
      path: '*',
      name: '404',
      component: () => import('@/view/404.vue')
    }
  ]
})
