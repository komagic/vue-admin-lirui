export const proxy = {
	"/dev/": {
		target: "http://150.158.147.122:8002",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, ""),
	},

	"/prod/": {
		target: "http://127.0.0.1",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "")
	},
};
