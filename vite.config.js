import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/sitemap.xml', // Ensure your sitemap.xml is in the public folder
          dest: '',
          rename: 'sitemap' // This will serve sitemap.xml as /sitemap
        },
        {
          src: 'public/robots.txt', // Ensure your robots.txt is in the public folder
          dest: '',
          rename: 'robots' // This will serve robots.txt as /robots
        }
      ]
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
})
