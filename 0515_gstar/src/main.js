// router
import { createApp } from 'vue'
import router from '@/router'

// Styles
import fontStyle from '@/styles/fonts.css'
import cssStyle from '@/styles/style.css'

import App from './App.vue'

createApp(App).use(router).mount('#wrap')
