import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': resolve(__dirname, 'src')
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `$base-asset-url: '../assets/' !default;`
  //     }
  //   }
  // },
  server: {
    open: true,
    hmr: {
      overlay: false
    },
    cors: false
  }
})