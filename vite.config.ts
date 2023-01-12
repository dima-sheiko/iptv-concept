import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }),
    copy({
      targets: [
        {
          src: './api',
          dest: 'dist/api',
        },
      ],
      hook: 'writeBundle',
    }),
  ],
});
