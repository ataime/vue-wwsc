import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers:[ElementPlusResolver()],
      imports: ["vue","vue-router","pinia"],
    }),
    Components({
      resolvers:[ElementPlusResolver({importStyle:"sass"})],
    }),
  ],
  server:{
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
        `
      }
    }
  }
})
