import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/data-integrate'
    },
    {
      path: '*',
      redirect: '/data-integrate'
    },
    {
      name: 'data-integrate',
      path: '/data-integrate',
      component: () => import('@/pages/data-integrate/index.vue'),
      children: [
        {
          path: '/data-one',
          component: resolve => require(['@/pages/data-integrate/dataOne.vue'], resolve),
        },
        {
          path: '/data-two',
          component: resolve => require(['@/pages/data-integrate/dataTwo.vue'], resolve),
        },
      ]
    },
    {
      name: 'data-model',
      path: '/data-model',
      component: () => import('@/pages/data-model/index.vue'),
      children: [
        {
          path: '/model-one',
          component: resolve => require(['@/pages/data-model/dataOne.vue'], resolve),
        },
        {
          path: '/model-two',
          component: resolve => require(['@/pages/data-model/dataTwo.vue'], resolve),
        },
      ]
    },
    {
      name: 'data-extract',
      path: '/data-extract',
      component: () => import('@/pages/data-extract/index.vue'),
      children: [
        {
          path: '/extract-one',
          component: resolve => require(['@/pages/data-extract/dataOne.vue'], resolve),
        },
        {
          path: '/extract-two',
          component: resolve => require(['@/pages/data-extract/dataTwo.vue'], resolve),
        },
      ]
    },
    {
      name: 'data-property',
      path: '/data-property',
      component: () => import('@/pages/data-property/index.vue'),
      children: [
        {
          path: '/property-one',
          component: resolve => require(['@/pages/data-property/dataOne.vue'], resolve),
        },
        {
          path: '/property-two',
          component: resolve => require(['@/pages/data-property/dataTwo.vue'], resolve),
        },
      ]
    }
  ]
})
