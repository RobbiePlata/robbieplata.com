import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'
const path = require('path');

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias:  {
      '@': path.resolve(__dirname, './src/'),
    }
  },
})
