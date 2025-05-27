/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { coverageConfigDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
      '#assets': path.resolve(__dirname, './src/assets'),
      '#lib': path.resolve(__dirname, './src/lib'),
      '#helpers': path.resolve(__dirname, './src/lib/helpers'),
      '#contexts': path.resolve(__dirname, './src/contexts'),
      '#components': path.resolve(__dirname, './src/components'),
      '#pages': path.resolve(__dirname, './src/pages'),
      '#testUtils': path.resolve(__dirname, './src/tests/testUtils.tsx'),
      '#translations': path.resolve(
        __dirname,
        './src/i18n/translations/translationKeys.ts',
      ),
      '#libTestUtils': path.resolve(__dirname, './src/lib/tests/testUtils.ts'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    passWithNoTests: true,
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      provider: 'v8',
      exclude: ['**/index.ts', ...coverageConfigDefaults.exclude],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
