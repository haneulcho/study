import { createApp } from 'vue'
import router from '@/router' //@/router/index.js

import pageStyle from '@/styles/style.css'

import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#wrap')
