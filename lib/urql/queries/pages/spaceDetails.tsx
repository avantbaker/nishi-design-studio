import {
	BrandAndPartnersSectionFragment,
	ProcessSliderSectionFragment,
	SpaceDetailSectionFragment,
	SpaceInformationFragment,
	StartYourSpaceFragment,
} from 'lib/urql/fragments';

export default `
  query getPostBySlug($slug: ID!){
    post(id: $slug, idType: SLUG){
      title
      ${SpaceInformationFragment}
      ${SpaceDetailSectionFragment}
      ${BrandAndPartnersSectionFragment}
      ${ProcessSliderSectionFragment}
      ${StartYourSpaceFragment}
    }
  }
`;
