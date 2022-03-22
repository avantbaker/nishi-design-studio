const TestimonialSectionFragment = `
  testimonialsSection {
    headline
    pressReleases {
      pressRelease {
        ... on PressRelease {
          slug
          title
          pressRelease {
            pressFeaturedImage {
              sourceUrl
            }
            pressLogo {
              sourceUrl
            }
            pressLink {
              url
            }
            pressSeason
            pressContent
            pressEdition
          }
        }
      }
    }	
  }
`;

export default TestimonialSectionFragment;
