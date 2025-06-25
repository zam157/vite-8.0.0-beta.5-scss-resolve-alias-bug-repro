import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
export default defineConfig(() => {
  // The replacement points to the right location
  console.log(fileURLToPath(new URL('./src/', import.meta.url)) + '$1');

  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: [
        {
          find: /@\/(.*)/,
          // This version is able to resolve the import "@/test.ts" but fails for "@use '@/test.scss'"
          replacement: fileURLToPath(new URL('./src/', import.meta.url)) + '$1',
          // This version is able to resolve both (but only because they are both in the root of ./src/)
          // replacement: './$1',
        },
      ],
    },
  };
});
