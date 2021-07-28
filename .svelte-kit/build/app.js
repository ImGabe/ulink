import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"/ulink-frontend","assets":"/ulink-frontend"} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/ulink-frontend/_app/start-9121c0e1.js",
			css: ["/ulink-frontend/_app/assets/start-a8cd1609.css"],
			js: ["/ulink-frontend/_app/start-9121c0e1.js","/ulink-frontend/_app/chunks/vendor-558e3855.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/ulink-frontend/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: /** @param {Error & {frame?: string}} error */ (error) => {
			if (error.frame) {
				console.error(error.frame);
			}
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: false,
		target: "#svelte",
		template,
		trailing_slash: "ignore"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":1571,"type":"image/png"}],
	layout: ".svelte-kit/build/components/layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: [".svelte-kit/build/components/layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/duration\/?$/,
						params: empty,
						a: [".svelte-kit/build/components/layout.svelte", "src/routes/duration.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	serverFetch: hooks.serverFetch || fetch
});

const module_lookup = {
	".svelte-kit/build/components/layout.svelte": () => import("./components/layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/duration.svelte": () => import("../../src/routes/duration.svelte")
};

const metadata_lookup = {".svelte-kit/build/components/layout.svelte":{"entry":"/ulink-frontend/_app/layout.svelte-7c1ad1c3.js","css":[],"js":["/ulink-frontend/_app/layout.svelte-7c1ad1c3.js","/ulink-frontend/_app/chunks/vendor-558e3855.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"/ulink-frontend/_app/error.svelte-18b12380.js","css":[],"js":["/ulink-frontend/_app/error.svelte-18b12380.js","/ulink-frontend/_app/chunks/vendor-558e3855.js"],"styles":[]},"src/routes/index.svelte":{"entry":"/ulink-frontend/_app/pages/index.svelte-8c3098df.js","css":[],"js":["/ulink-frontend/_app/pages/index.svelte-8c3098df.js","/ulink-frontend/_app/chunks/vendor-558e3855.js","/ulink-frontend/_app/pages/duration.svelte-f15a3bde.js"],"styles":[]},"src/routes/duration.svelte":{"entry":"/ulink-frontend/_app/pages/duration.svelte-f15a3bde.js","css":[],"js":["/ulink-frontend/_app/pages/duration.svelte-f15a3bde.js","/ulink-frontend/_app/chunks/vendor-558e3855.js"],"styles":[]}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}