import {
	BrandAndPartnersSectionFragment,
	ProcessSliderSectionFragment,
	SpaceDetailSectionFragment,
	SpaceInformationFragment,
	StartYourSpaceFragment,
	ImageGalleryFragment,
} from 'lib/urql/fragments';

export default `
  query getPostBySlug($slug: ID!){
    post(id: $slug, idType: SLUG){
      title
      next {
        slug
      }
      previous {
        slug
      }
      ${SpaceInformationFragment}
      ${SpaceDetailSectionFragment}
      ${BrandAndPartnersSectionFragment}
      ${ProcessSliderSectionFragment}
      ${ImageGalleryFragment}
      ${StartYourSpaceFragment}
    }
  }
`;
