import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './html',
  publicDir: '../assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'esbuild', // Minificação ultra-rápida via esbuild (JS e CSS)
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'html/index.html')
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
});
