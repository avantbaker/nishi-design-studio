const LegalPageQuery = `
  {
    page(id: 267, idType: DATABASE_ID) {
      legal {
        legalCaptionLine1
        legalCaptionLine2
        legalTermsAndConditionsTitle
        legalTermsAndConditionsContent
        legalPrivacyTitle
        legalPrivacyContentCopy
      }
    }
  }
`;

export default LegalPageQuery;
