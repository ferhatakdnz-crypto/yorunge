import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

// __dirname yerine modern alternatif
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        // @ işaretini src klasörüne yönlendirdik, en güvenli yol budur
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // Yerel çalışırken kolaylık sağlar
      port: 3000,
      host: true,
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      // Vercel build performansı için
      outDir: 'dist',
      sourcemap: false
    }
  };
});