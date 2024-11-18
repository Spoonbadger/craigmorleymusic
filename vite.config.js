import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This binds the server to all network interfaces
    port: process.env.PORT || 3000,  // Use the port provided by Render, default to 3000 if not available
  },
})
