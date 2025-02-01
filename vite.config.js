export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Barcha `console.log`larni olib tashlaydi
        drop_debugger: true, // `debugger` ishlatishni bloklaydi
      },
      mangle: true, // Funksiya va o‘zgaruvchi nomlarini o‘zgartirib tashlaydi
    },
  },
});
