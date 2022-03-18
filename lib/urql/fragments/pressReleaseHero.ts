import { PressReleaseFragment } from 'lib/urql/fragments';

const PressReleaseHeroFragment = `
  pressReleaseHero {
    pressfeaturedimg {
      sourceUrl
    }
    presstestimonial
    pressfeaturedpost {
      ... on PressRelease {
        title
        ${PressReleaseFragment}
      }
    }
  }
`;

export default PressReleaseHeroFragment;
