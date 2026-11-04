import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' : le site fonctionne aussi bien sur https://<user>.github.io/ que sur https://<user>.github.io/<repo>/
export default defineConfig({ base: './', plugins: [react()] });
