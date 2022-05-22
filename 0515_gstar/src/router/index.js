import { createRouter, createWebHistory } from 'vue-router'

// Route Components
import About from '@/components/About.vue'
import Necoje from '@/components/Necoje.vue'
import Event from '@/components/Event.vue'
import PageNotFound from '@/components/PageNotFound.vue'

const routes = [
  { name: 'home', path: '/home', component: About },
  { name: 'about', path: '/about', component: About },
  { name: 'necoje', path: '/necoje', component: Necoje },
  { name: 'event', path: '/event', component: Event },
  // 원하지 않은 페이지로 접근할 때 404 띄우기
  { path: '/:pathMatch(.*)*', component: PageNotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
