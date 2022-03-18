const TestimonialSectionFragment = `
testimonialsSection {
  testimonialLinkTitle
  testimonialHeadline
  scrollingText
  brandsImage {
    sourceUrl
  }
  testimonialLinkUrl {
    ... on Post {
      uri
    }
  }
}
`;

export default TestimonialSectionFragment;
