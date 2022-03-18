export const normalizePosts = (posts = []) => {
	if (!posts || !(posts.length > 0)) return;
	return posts.map(({ space, ...rest }) => {
		const CV = space || rest;
		return {
			title: CV?.title || 'New Space',
			location: CV?.spaceInformation?.spaceLocation || 'Atlanta, GA',
			year: CV?.spaceInformation?.year || '2022',
			category: CV?.categories?.nodes?.[0]?.name || 'Uncategorized',
			slug: CV?.slug || '/spaces',
			imgSrc:
				CV?.spaceFeaturedImage?.sourceUrl ||
				'https://dev-nishi-design-studio.pantheonsite.io/wp-content/uploads/2022/03/spaces-slide-image.png',
			src: 'https://dev-nishi-design-studio.pantheonsite.io/wp-content/uploads/2022/03/spaces-slide-image.png',
			href: 'https://dev-nishi-design-studio.pantheonsite.io/wp-content/uploads/2022/03/spaces-slide-image.png',
		};
	});
};
