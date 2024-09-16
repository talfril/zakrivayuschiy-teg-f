import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',  // Папка, содержащая исходные файлы
  build: {
    outDir: '../dist',  // Папка, куда будет собираться проект
    rollupOptions: {
      input: './src/index.html',  // Входной файл
    },
  },
});
