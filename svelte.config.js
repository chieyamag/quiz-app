import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(), // ✅ ここが重要！

  kit: {
    adapter: adapter()
  }
};

export default config;
