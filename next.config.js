//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	crossOrigin: "anonymous",
	reactStrictMode: true,
	output: "export",
	images: { unoptimized: true },
};

module.exports = nextConfig;
