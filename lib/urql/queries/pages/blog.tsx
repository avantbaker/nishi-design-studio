import {
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
  }
`;

export default BlogPageQuery;
