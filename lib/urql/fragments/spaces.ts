import { SpaceInformationFragment } from 'lib/urql/fragments';

const SpacesFragment = `
  posts (first: 5) {
    nodes {
      title
      ${SpaceInformationFragment}
    }
  }
`;

export default SpacesFragment;
