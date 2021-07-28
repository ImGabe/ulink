import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: netlify(),

		paths: {
			base: '/ulink-frontend'
		},

		ssr: false,

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		trailingSlash: 'ignore'
	}
};

export default config;
