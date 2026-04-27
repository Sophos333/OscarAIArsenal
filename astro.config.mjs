import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sophos333.github.io',
  base: '/OscarAIArsenal/',

  vite: {
    plugins: [tailwindcss()],
  },
});