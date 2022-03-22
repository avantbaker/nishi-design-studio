import {
	BlogSectionFragment,
	NewsletterSectionFragment,
	SocialSectionFragment,
	TestimonialSectionFragment,
} from 'lib/urql/fragments';

const BlogPageQuery = `
  {
    page(id: 243, idType: DATABASE_ID) {
      ${TestimonialSectionFragment}
      ${SocialSectionFragment}
      ${NewsletterSectionFragment}
    }
    articles(first: 4) {
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

export default BlogPageQuery;
