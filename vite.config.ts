import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'import.meta.env.VITE_NOCODB_API_URL': JSON.stringify('https://app.nocodb.com'),
    'import.meta.env.VITE_NOCODB_AUTH_TOKEN': JSON.stringify('8B7UB0K-eO1sIpNSZmstyUsHpt5UqRsOAa1zTKXS'),
    // Table ID is now hardcoded in the component
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@headlessui/react', 'lucide-react'],
        },
      },
    },
  },
  server: {
    warmup: {
      clientFiles: [
        './src/main.tsx',
        './src/App.tsx',
        './src/pages/HomePage.tsx'
      ]
    }
  }
});