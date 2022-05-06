module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['dev-nishi-design-studio.pantheonsite.io'],
	},
	async redirects() {
		return [
			{
				source: '/:anything',
				destination: '/', // Matched parameters can be used in the destination
				permanent: false,
			},
		];
	},
};
