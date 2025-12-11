import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-study-v3/',   // 깃허브 레파지토리 이름 그대로 올리기!!!
  plugins: [react()],
})
