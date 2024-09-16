import { defineConfig } from 'vite';

export default defineConfig({
  base: '/zakrivayuschiy-teg-f/',  
  root: './src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: './src/index.html',
    },
  },
});
