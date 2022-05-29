import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/uvlight/login',
  },
  {
    path: '/uvlight',
    redirect: '/uvlight/login',
  },
  {
    path: '/uvlight/login',
    component: () => import('@/views/FolderPage.vue')
  },
  {
    path: '/uvlight/',
    component: TabsPage,
    children: [
      {
        path: 'commandes/:id',
        component: () => import('@/views/FolderPage2.vue')
      },
      {
        path: 'detail/:id',
        component: () => import('@/views/FolderPage3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
