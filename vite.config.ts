import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows binding to 0.0.0.0
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
