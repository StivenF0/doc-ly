import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { VitePWA } from "vite-plugin-pwa";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [
      VitePWA({ registerType: "autoUpdate" })
    ]
  }
});