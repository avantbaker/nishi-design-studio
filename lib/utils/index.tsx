import { StyledListingCard } from 'components/sections/slider-section/styles';
import { Categories } from 'pages/spaces';

export const getPageData = (result) => {
	if (!result || !result.data) return result;
	return result.data?.page || {};
};
export const getPostData = (result) => {
	if (!result || !result.data) return result;
	return result.data?.post || {};
};
export const getData = (dataType, result) => {
	if (!result || !result.data) return result;
	return result.data?.[dataType] || {};
};

export const createSlideMap = function (slides, currentIndex) {
	return slides.reduce((acc, slide, idx) => {
		acc[idx] = (
			<StyledListingCard
				location={slide.location}
				year={slide.year}
				title={slide.title}
				href={slide?.linkUrl?.uri || '/'}
				asCard
				selected={currentIndex === idx}
			/>
		);
		return acc;
	}, {});
};

export const buildPostQueryByCategory = (category?: Categories) => {
	let query = ' ';
	if (category) {
		query = `(where: { categoryName: "${category}" }) `;
	}
	return `
		{
			posts${query}{
				nodes {
					id
					title
					slug
					spaceInformation {
						spaceLocation
						spaceYear
						spaceFeaturedImage {
							sourceUrl
						}
					}
				}
			}
		}
	`;
};
