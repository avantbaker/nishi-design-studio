import { BlogSectionFragment } from 'lib/urql/fragments';

export default `
  {
    articles (first: 4) {
      nodes {
        ${BlogSectionFragment}
      }
    }
  }
`;
