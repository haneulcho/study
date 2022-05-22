import { createApp } from 'vue'

// Router
import router from '@/router'

// Styles
import fontStyle from '@/styles/fonts.css' 
import mainStyle from '@/styles/style.css' 

import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#wrap')
  