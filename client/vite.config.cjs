const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/porfolio-react/' : '/',
  plugins: [react()],
  root: 'client',
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
