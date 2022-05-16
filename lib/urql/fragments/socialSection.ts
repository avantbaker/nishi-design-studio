const SocialSectionFragment = `
  socialSection {
    useDefaults
    socialTitle
    socialImages {
      image {
        sourceUrl
      }
      width
      height
      imgixUrl {
        url
      }
    }
    socialLinkUrl {
      title
      url
    }
  }
`;

export default SocialSectionFragment;
