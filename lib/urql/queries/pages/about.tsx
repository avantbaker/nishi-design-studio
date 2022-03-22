import {
	SimpleHeaderFragment,
	TwoColumnOffsetSectionFragment,
	TeamSectionFragment,
	TeamMembersFragment,
	TestimonialSectionFragment,
	TwoColumnImageOverlayFragment,
	StartYourSpaceFragment,
	SocialSectionFragment,
	ImageGalleryFragment,
} from 'lib/urql/fragments';

/*
${SimpleTwoColumnSectionFragment}
*/
export default `
  {
    page(id: 132, idType: DATABASE_ID) {
      ${SimpleHeaderFragment}
      ${TestimonialSectionFragment}
      ${TwoColumnImageOverlayFragment}
      ${TeamSectionFragment}
      ${TwoColumnOffsetSectionFragment}
      ${ImageGalleryFragment}
      ${StartYourSpaceFragment}
    }
    ${TeamMembersFragment}
  }
`;
