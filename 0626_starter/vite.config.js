import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'

// Node Polyfills
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// Rollup Plugins
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // development 모드(ESBuild 기반)를 위한 설정
  server: {
    open: true,
    port: 3002
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  // production 모드(Rollup 기반), 최종 빌드를 위한 설정
  build: {
    target: 'es2019',
    emptyOutDir: true,
    outDir: './dist',
    rollupOptions: {
      plugins: [
        nodeResolve({
          preferBuiltins: true,
          browser: true
        }),
        commonjs({
          include: ['node_modules/**']
        })
      ]
    },
    commonjsOptions: {
      include: ['/node_modules/'],
      transformMixedEsModules: true
    }
  }
})
