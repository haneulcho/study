import { createApp } from 'vue'
import router from '@/router'

// styles
import fontStyle from '@/styles/fonts.css'
import mainStyle from '@/styles/style.css'

import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#wrap')
