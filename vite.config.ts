import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [
    angular({
      tsconfig: resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
  resolve: {
    mainFields: ['module'],
  },
  build: {
    outDir: 'dist/visions.shkrsltn/browser',
    target: 'es2020',
    emptyOutDir: true,
  },
  define: {
    'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(process.env.VITE_OPENAI_API_KEY || ''),
  },
  publicDir: resolve(__dirname, 'src/assets'),
  server: {
    port: 4200,
    open: true,
  },
  base: mode === 'production' ? '/visions.shkrsltn/' : '/',
}));
