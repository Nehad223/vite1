import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/vite1/', // ضع اسم المستودع الخاص بك هنا
  plugins: [react()],
});

