import {
	ContactFormFooterFragment,
	DesignerSectionFragment,
	NewsletterSectionFragment,
	SimpleBannerFragment,
	SocialSectionFragment,
	StartYourSpaceFragment,
	TitleTwoColumnFragment,
	VendorSectionFragment,
} from 'lib/urql/fragments';

const ContactPageQuery = `
  {
    page(id: 217, idType: DATABASE_ID) {
      ${SimpleBannerFragment}
      ${TitleTwoColumnFragment}
      ${ContactFormFooterFragment}
      ${VendorSectionFragment}
      ${DesignerSectionFragment}
      ${StartYourSpaceFragment}
      ${SocialSectionFragment}
      ${NewsletterSectionFragment}
    }
  }
`;

export default ContactPageQuery;
