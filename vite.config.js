import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포를 위해 베이스 경로를 고정합니다.
  base: '/th-wedding/',
  build: {
    minify: true
  }
})
