import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Source map’larni butunlay o‘chiradi
    minify: 'terser', // Kodni yanada minifikatsiya qiladi
    terserOptions: {
      compress: {
        drop_console: true, // Console.log'larni olib tashlaydi
        drop_debugger: true, // Debugger’larni olib tashlaydi
      },
      mangle: true, // O‘zgaruvchilar va funksiya nomlarini o‘zgartiradi
    },
  },
});
