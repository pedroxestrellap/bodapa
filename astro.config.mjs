import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

export default defineConfig({
  integrations: [react()],
  vite: {
    server: {
      allowedHosts: [
        'peroratorical-twiggier-marc.ngrok-free.dev'
      ]
    }
  }
})
