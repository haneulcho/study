import { createApp } from 'vue'
import router from '@/router' //@/router/index.js

// 주석 commit 테스트

import pageStyle from '@/styles/style.css'

import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#wrap')
