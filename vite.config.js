import { defineConfig } from 'vite'

export default defineConfig({
  // config options
  server: {
    hmr: {
      overlay: false,
    }
  }
})
