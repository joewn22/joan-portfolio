import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, normalizePath } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { createRequire } from "node:module";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

const require = createRequire(import.meta.url);
const standardFontsDir = normalizePath(
	path.join(
		path.dirname(require.resolve("pdfjs-dist/package.json")),
		"standard_fonts"
	)
);

declare module "@remix-run/node" {
	interface Future {
		v3_singleFetch: true;
	}
}

export default defineConfig({
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
				v3_singleFetch: true,
				v3_lazyRouteDiscovery: true,
			},
		}),
		tsconfigPaths(),
		viteStaticCopy({
			targets: [
				{
					src: standardFontsDir,
					dest: "",
				},
			],
		}),
		netlifyPlugin(),
	],
});
