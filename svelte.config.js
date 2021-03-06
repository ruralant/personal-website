import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-netlify';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  assetDir: 'static',
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [imagetools({ removeMetadata: true, force: true })],
      // resolve: {
      //   alias: {
      //     $api: path.resolve('./src/routes/api'),
      //   },
      // },
    },
    prerender: {
      crawl: true,
      enabled: true,
      onError: 'continue',
      entries: ['*'],
    },
  },
};

export default config;
