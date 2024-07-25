import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:3000',
        target: 'https://back-blog-project.onrender.com',
        //target prove
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react()],
});
