import { SpaceInformationFragment } from 'lib/urql/fragments';

const SelectedSpacesSectionFragment = `
  selectedSpacesSection {
    selectedSpacesTitle
    selectedSpaces {
      ... of Post {
        ${SpaceInformationFragment}
      }
    }
  }
`;

export default SelectedSpacesSectionFragment;
