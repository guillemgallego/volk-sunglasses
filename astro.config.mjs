import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://volksunglasses.com',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  }
});