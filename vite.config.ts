import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';

  return {
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
      'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || ''),
    },
    publicDir: resolve(__dirname, 'src/assets'),
    server: {
      port: 4200,
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    base: isGitHubPages ? '/visions.shkrsltn/' : '/',
  };
});
