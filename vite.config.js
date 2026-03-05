import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Netlify는 루트(/) 경로를 사용하고, GitHub Pages는 서브경로(/th-wedding/)를 사용합니다.
  base: process.env.NETLIFY ? '/' : (process.env.NODE_ENV === 'production' ? '/th-wedding/' : '/'),
})
