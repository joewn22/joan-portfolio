import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
			},
			colors: {
				main: "#F4F1E9",
				lines: "#685A3D",
				gold: "#E6C658",
				forest: "#25423C",
				black: "#030B1B",
			},
		},
	},
	plugins: [],
} satisfies Config;
