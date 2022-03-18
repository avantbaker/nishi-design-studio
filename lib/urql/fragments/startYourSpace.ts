const StartYourSpaceFragment = `
  startYourSpace {
    hasLogo
    hasLargeLogo
    hasBackground
    sysTitle
    sysBody
    sysLinkTitle
    sysLinkUrl {
      ... on Page {
        link
      }
    }
  }
`;

export default StartYourSpaceFragment;
