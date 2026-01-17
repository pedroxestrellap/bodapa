import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import react from '@astrojs/react'

export default defineConfig({
  output: "server",

  assets: {
    enabled: false, // 🔴 ESTA ES LA CLAVE REAL
  },

  adapter: netlify({
    edge: false, // necesario para Supabase
  }),
  integrations: [react()],
});
