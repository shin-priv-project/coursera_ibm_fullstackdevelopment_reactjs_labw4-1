import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/coursera_ibm_fullstackdevelopment_reactjs_labw4-1",
  plugins: [react()],
})
