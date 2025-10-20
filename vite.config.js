import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Node16で安定するようにbuildターゲットをやや保守的に
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019' // 省略可。互換性を重視
  }
});
