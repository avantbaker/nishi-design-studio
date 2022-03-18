const expertiseSection = `
	expertiseSection {
		expertiseTitle
		categories {
      title
      headline
      body
      image {
        sourceUrl
      }
      linkTitle
      linkUrl {
        ... on Post {
          uri
        }
      }
    }
	}
`;

export default expertiseSection;
