import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      // quando root = 'src', o index.html está em ./src/index.html,
      // então referencie ./index.html relativo ao config (import.meta.url)
      input: fileURLToPath(new URL('./index.html', import.meta.url)),
    },
  },
  server: {
    open: true,
  },
  resolve: {
    alias: [
      { find: '@components', replacement: fileURLToPath(new URL('./components', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./assets', import.meta.url)) },
      { find: '@styles', replacement: fileURLToPath(new URL('./styles', import.meta.url)) },
    ],
  },
});

// rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'src/index.html'),
//       },
//     },
