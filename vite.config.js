import { defineConfig } from 'vite'
import handlebars from './src/vite-plugin-handlebars-precompile';

export default defineConfig({
  plugins: [
    handlebars(),
    // {
    //   name: 'polyfill-structured-clone',
    //   config() {
    //     if (typeof globalThis.structuredClone === 'undefined') {
    //       globalThis.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
    //     }
    //   }
    // }
  ],
  publicDir: './src/static'
})
