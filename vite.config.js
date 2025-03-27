import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reactProject/', // Make sure this matches your GitHub repo name exactly
});
