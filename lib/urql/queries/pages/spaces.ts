import { HeroSliderFragment, StartYourSpaceFragment } from 'lib/urql/fragments';

const SpacesQuery = `
{
  page(id: 100, idType: DATABASE_ID) {
    ${HeroSliderFragment}
    ${StartYourSpaceFragment}
  }
}
`;

export default SpacesQuery;
