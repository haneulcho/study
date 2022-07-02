import { createRouter as createVueRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import About1View from '@/views/About1View.vue'
import About11View from '@/views/About11View.vue'
import About12View from '@/views/About12View.vue'

import About2View from '@/views/About2View.vue'
import About3View from '@/views/About3View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path: '/introduce',
        name: 'about01',
        component: About1View,
        meta: {
          title: 'About 1'
        },
        children: [
          {
            path: 'about01_1',
            name: 'about01_1',
            component: About11View,
            meta: {
              title: '어바웃 1의 1번 메뉴'
            }
          },
          {
            path: 'about01_2',
            name: 'about01_2',
            component: About12View,
            meta: {
              title: '어바웃 1의 2번 메뉴'
            }
          }
        ]
      },
      {
        path: '/about02',
        name: 'about02',
        component: About2View,
        meta: {
          title: 'About 2'
        }
      },
      {
        path: '/about03',
        name: 'about03',
        component: About3View,
        meta: {
          title: 'About 3'
        }
      }
    ]
  }
]

const createRouter = () => {
  const router = createVueRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  return router
}

export default createRouter
