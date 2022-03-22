import { BlogSectionFragment } from 'lib/urql/fragments';

export default `
  query getArticleBySlug($slug: ID!){
    article(id: $slug, idType: SLUG){
      title
      date
      tags {
        nodes {
          name
        }
      }
      ${BlogSectionFragment}
    }
    articles {
      nodes {
        title
        date
        slug
        tags {
          nodes {
            name
          }
        }
        ${BlogSectionFragment}
      }
    }
  }
`;
