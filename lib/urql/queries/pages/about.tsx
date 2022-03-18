import {
	SimpleHeaderFragment,
	SimpleTwoColumnSectionFragment,
	TeamSectionFragment,
	TestimonialSectionFragment,
	TwoColumnImageOverlayFragment,
	StartYourSpaceFragment,
	SocialSectionFragment,
} from 'lib/urql/fragments';

export default `
  {
    page(id: 132, idType: DATABASE_ID) {
      ${SimpleHeaderFragment}
      ${TestimonialSectionFragment}
      ${TwoColumnImageOverlayFragment}
      ${TeamSectionFragment}
      ${SimpleTwoColumnSectionFragment}
      ${SocialSectionFragment}
      ${StartYourSpaceFragment}
    }
  }
`;
