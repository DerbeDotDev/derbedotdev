import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: "https://www.derbe.dev",
  output: 'server',
  adapter: vercel({
    analytics: true
  }),
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});