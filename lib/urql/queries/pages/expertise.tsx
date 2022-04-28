import {
	ProcessSliderSectionFragment,
	SpacesFragment,
	SimpleHeaderFragment,
	StartYourSpaceFragment,
	ExpertiseSectionFragment,
} from 'lib/urql/fragments';

export default `
  {
    page(id: 134, idType: DATABASE_ID) {
      ${SimpleHeaderFragment}
      ${ExpertiseSectionFragment}
      ${ProcessSliderSectionFragment}
      ${StartYourSpaceFragment}
    }
    ${SpacesFragment}
  }
`;
