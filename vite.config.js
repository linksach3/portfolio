import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.{jsx,js}"
  })],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  base: '/portfolio/',  // ✅ Important: relative paths for GitHub Pages
  build: {
    outDir: 'docs',  // ✅ GitHub Pages serves from /docs if repo root
  }
})
