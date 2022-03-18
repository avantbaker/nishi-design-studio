import {
	ExpertiseDetailSectionFragment,
	ProcessSliderSectionFragment,
	SelectedSpacesSectionFragment,
	SimpleHeaderFragment,
	StartYourSpaceFragment,
} from 'lib/urql/fragments';

export default `
  {
    page(id: 134, idType: DATABASE_ID) {
      ${SimpleHeaderFragment}
      ${ExpertiseDetailSectionFragment}
      ${ProcessSliderSectionFragment}
      ${SelectedSpacesSectionFragment}
      ${StartYourSpaceFragment}
    }
  }
`;
