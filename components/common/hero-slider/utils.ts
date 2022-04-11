export const normalizePosts = (posts = [], featured = false) => {
	if (!posts || !(posts.length > 0)) return;
	return posts.map(({ space, ...rest }) => {
		const CV = space || rest;
		if (featured) {
			// console.log('CV:', CV);
		}
		console.log('CV:', CV);
		return {
			title: CV?.title || 'New Space',
			location: CV?.spaceInformation?.spaceLocation || 'Atlanta, GA',
			year: CV?.spaceInformation?.year || '2022',
			category: CV?.categories?.nodes?.[0]?.name || 'Uncategorized',
			slug: CV?.slug || 'spaces',
			imgSrc: CV?.spaceInformation?.spaceFeaturedImage?.sourceUrl,
			src: 'https://dev-nishi-design-studio.pantheonsite.io/wp-content/uploads/2022/03/spaces-slide-image.png',
			href: 'https://dev-nishi-design-studio.pantheonsite.io/wp-content/uploads/2022/03/spaces-slide-image.png',
		};
	});
};
export const normalizeSpaces = (posts = []) => {
	if (!posts || !(posts.length > 0)) return;
	return posts.map(({ space, ...rest }) => {
		const CV = space || rest;
		return {
			title: CV?.title || 'New Space',
			location: CV?.spaceInformation?.spaceLocation || 'Atlanta, GA',
			year: CV?.spaceInformation?.year || '2022',
			category: CV?.categories?.nodes?.[0]?.name || 'Uncategorized',
			slug: CV?.slug || 'spaces',
			imgSrc: CV?.spaceFeaturedImage?.sourceUrl,
		};
	});
};
