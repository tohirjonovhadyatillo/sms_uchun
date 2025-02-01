import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Source map’larni o‘chiradi, kodni yashiradi
    minify: 'terser', // Kodni minifikatsiya qiladi
    terserOptions: {
      compress: {
        drop_console: true, // Console.log'larni olib tashlaydi
        drop_debugger: true, // Debugger'larni olib tashlaydi
      },
      mangle: true, // O'zgaruvchilar nomini chalkashtirib tashlaydi
    },
  },
});
