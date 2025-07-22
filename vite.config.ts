import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/barbershop-template/', // Set this to your GitHub repo name
  server: {
    port: 3000,
    open: true
  }
}) 