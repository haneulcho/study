import { createRouter, createWebHistory } from 'vue-router'

// Route Components
import About from '@/components/About.vue'
import Necoje from '@/components/Necoje.vue'
import Event from '@/components/Event.vue'
import pageNotFound from '@/components/pageNotFound.vue'

const routes = [
  { name: 'home', path: '/', component: About },
  { name: 'about', path: '/about', component: About },
  { name: 'necoje', path: '/necoje', component: Necoje },
  { name: 'event', path: '/event', component: Event },
  //원하지 않는 페이지로 접근할 때 404 띄우기
  { path: '/:pathMatch(.*)*', component: pageNotFound }
]

const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition || { top: 720, behavior: 'smooth' }
}

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})