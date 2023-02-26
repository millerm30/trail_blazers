import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  site: 'https://millerm30.github.io',
  base: '/trail_blazers',
  integrations: [tailwind(), react()],
});