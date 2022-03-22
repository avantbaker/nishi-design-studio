import { PressReleaseFragment, PressReleaseHeroFragment } from 'lib/urql/fragments';

const PressPageQuery = `
  {
    page(id: 258, idType: DATABASE_ID) {
      ${PressReleaseHeroFragment}
    }
    pressReleases {
      nodes {
        title
        ${PressReleaseFragment}
      }
    }
  }
`;

export default PressPageQuery;
