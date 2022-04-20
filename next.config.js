/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.MAJORKEYS_API_URL,
	},
	
	i18n: {
		locales: ['es', 'en'],
		defaultLocale: 'es',
	},
};

module.exports = nextConfig;
