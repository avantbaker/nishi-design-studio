const HeroSliderFragment = `
	heroSlider {
		heroTitle
		heroSubtitle
		caption
		featuredPosts {
			space {
				... on Post {
					title
					slug
					categories(first: 1) {
						nodes {
							name
						}
					}
					spaceInformation {
						spaceLocation
						spaceYear
						spaceFeaturedImage {
							sourceUrl
						}
						spaceFeaturedImageNew {
							url
						}
					}
				}
			}
		}			
	}
`;

export default HeroSliderFragment;
