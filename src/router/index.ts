// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import wireframes from './wireframes'
import utilityClasses from './utility-classes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  ...wireframes,
  ...utilityClasses,
  {
    path: '/skeleton-loaders',
    component: () => import('@/views/skeleton-loaders.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
