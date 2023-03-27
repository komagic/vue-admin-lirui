export const proxy = {
	"/dev/": {
		target: "http://150.158.147.122:8001",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, ""),
	},

	"/prod/": {
		target: "http://150.158.147.122:8001",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "")
	},
};
