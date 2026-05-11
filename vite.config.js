import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // આ લાઈન ઉમેરો

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // આ લાઈન "older version of react" વાળી એરર સોલ્વ કરશે
      react: path.resolve('./node_modules/react'),
    },
  },
})