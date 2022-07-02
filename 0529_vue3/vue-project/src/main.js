import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router' //@/router/index.js

import axios from 'axios'
import VueAxios from 'vue-axios'

import font from '@/assets/fonts.css'
import 'keen-slider/keen-slider.min.css'
import pageStyle from '@/styles/style.css'

import App from './App.vue'

const app = createApp(App)

app
  .use(VueAxios, axios)
  .provide('axios', app.config.globalProperties.axios)
  .use(createPinia())
  .use(router)
  .mount('#wrap')
