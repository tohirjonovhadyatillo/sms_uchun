import { defineConfig } from 'vite';
import obfuscatorPlugin from 'vite-plugin-javascript-obfuscator'; // Obfuskatsiya uchun plugin

export default defineConfig({
  plugins: [
    obfuscatorPlugin({
      compact: true, // Kodni ixchamlashtirish
      controlFlowFlattening: true, // Kodni chalg'itish
      deadCodeInjection: true, // Keraksiz kod qo'shish
      debugProtection: true, // Debug qilishni qiyinlashtirish
      debugProtectionInterval: true, // Debug qilishni to'xtatish
      disableConsoleOutput: true, // Konsolga chiqishni o'chirish
      rotateStringArray: true, // String massivlarni aylantirish
      selfDefending: true, // O'zini himoya qilish
      stringArray: true, // String massivlarni obfuskatsiya qilish
      stringArrayThreshold: 0.75, // String massivlarni obfuskatsiya qilish darajasi
    }),
  ],
  build: {
    minify: 'terser', // Kodni minifikatsiya qilish
    sourcemap: false, // Source map-larni o'chirish
    terserOptions: {
      compress: {
        drop_console: true, // Konsolga chiqadigan loglarni olib tashlash
      },
    },
  },
});