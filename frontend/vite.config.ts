import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': 'https://rm8ldona7j.execute-api.us-east-1.amazonaws.com',//comunicação com o backend
        },
  },
});
