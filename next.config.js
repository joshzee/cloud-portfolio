//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	crossOrigin: "anonymous",
	reactStrictMode: true,
	output: "export",
	images: { unoptimized: true },

	experimental: {
		outputFileTracingIncludes: {
			"/api": ["./public/**/*"],
		},
	},
};

module.exports = nextConfig;
