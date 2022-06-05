import { createApp } from 'vue'
import router from '@/router' //@/router/index.js

import font from '@/assets/fonts.css'
import pageStyle from '@/styles/style.css'

import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#wrap')
