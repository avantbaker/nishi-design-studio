import {
	ExpertiseSectionFragment,
	HeroSliderFragment,
	TwoColumnTextSectionFragment,
	TestimonialSectionFragment,
	StartYourSpaceFragment,
	SocialSectionFragment,
	NewsletterSectionFragment,
} from 'lib/urql/fragments';

const HomepageData = `
	{
		page(id: 22, idType: DATABASE_ID) {
			${HeroSliderFragment}
			${TwoColumnTextSectionFragment}
			${ExpertiseSectionFragment}
			${TestimonialSectionFragment}
			${StartYourSpaceFragment}
			${SocialSectionFragment}
			${NewsletterSectionFragment}
		}
	}
`;

export default HomepageData;
