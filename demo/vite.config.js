import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import aliases from '../src/index';
import aliases from 'xyz-vite-plugin-aliases';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    aliases(),
    aliases({ prefix: '&&', aliasDir: path.resolve(__dirname, './src/pages') })
  ]
});
