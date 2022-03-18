const HeroSliderFragment = `
	heroSlider {
		heroTitle
		heroSubtitle
		caption
		slides {
			location
			year
			title
			linkText
			linkUrl {
				... on Post {
					uri
				}
			}
			image {
				sourceUrl
			}
		}
		featuredPosts {
			space {
				... on Post {
					title
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
					}
				}
			}
		}			
	}
`;

export default HeroSliderFragment;
