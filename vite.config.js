import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

let commitHash = 'dev'
try {
  commitHash = execSync('git rev-parse --short HEAD').toString().trim()
} catch (e) {}

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포를 위해 베이스 경로를 고정합니다.
  base: '/th-wedding/',
  server: {
    host: '127.0.0.1'
  },
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
  },
  build: {
    outDir: 'build_dist',
    minify: false
  }
})
