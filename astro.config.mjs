import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://volksunglasses.com',
  output: 'static',
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
  },
  redirects: {
    '/shop': '/katalog',
    '/my-account': 'https://api.volksunglasses.com/my-account',
    '/product-category/[...slug]': '/katalog',
    '/product/[...slug]': '/[slug]',
  }
});