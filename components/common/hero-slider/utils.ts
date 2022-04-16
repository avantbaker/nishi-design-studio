export const normalizePosts = (posts = [], featured = false) => {
	if (!posts || !(posts.length > 0)) return;
	return posts.map(({ space, ...rest }) => {
		const CV = space || rest;

		const result = {
			title: CV?.title || 'New Space',
			location: CV?.spaceInformation?.spaceLocation || 'Atlanta, GA',
			year: CV?.spaceInformation?.year || '2022',
			category: CV?.categories?.nodes?.[0]?.name || 'Uncategorized',
			slug: CV?.slug || 'spaces',
			imgSrc: CV?.spaceInformation?.spaceFeaturedImage?.sourceUrl,
			src:
				CV?.spaceInformation?.spaceFeaturedImage?.sourceUrl ||
				'https://dev-nishi-design-studio.pantheonsite.io/wp-content/uploads/2022/03/spaces-slide-image.png',
			href:
				CV?.slug ||
				'https://dev-nishi-design-studio.pantheonsite.io/wp-content/uploads/2022/03/spaces-slide-image.png',
		};

		if (featured) {
			console.log('Slide Info:', result);
		}

		return result;
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
