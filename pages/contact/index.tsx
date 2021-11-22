import { breakpoints } from 'styles/media';
import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import StartYourSpace from 'components/sections/start-your-space';
import FormSection from 'components/sections/form-section';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import SocialSection from 'components/sections/social-section';
import SignupSection from 'components/sections/signup-section';
import VendorsContractors from 'components/sections/vendors-contractors';
import { PrimaryButton, SecondaryButton } from 'components/common/button';

const HeaderWrap = styled.div`
  background-color: ${theme.colors.lightTan};
`;

const PageBackground = styled.div`
  background-image: url('/images/contact-bg.png');
  background-size: contain;
`;

const PageContent = styled.div`
  max-width: ${rem(1123)};
  margin: 0 auto;
  padding: 0 ${rem(28)};

  ${PrimaryButton} {
    width: ${rem(274)};
  }

  .ty-text {
    margin-bottom: ${rem(62)};
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    .ty-text {
      font-size: ${rem(25)};
      line-height: ${rem(30)};
      letter-spacing: normal;
      max-width: ${rem(232)};
      margin-bottom: ${rem(15)};
    }
  }
`;

const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(4)} ${rem(28)} ${rem(28)} ${rem(28)};
  max-width: ${rem(1123)};
  margin: 0 auto;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${rem(44)};
    margin-top: ${rem(49)};
  }
`;

const FormHeader = styled(Flex)`
  flex-direction: column;
  padding-top: ${rem(62)};
  margin-bottom: ${rem(103)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    margin-bottom: ${rem(52)};
  }
`;

const BottomLayout = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${theme.colors.lightTan};
`;

export default function Contact() {
  return (
    <>
      <HeaderWrap>
        <Nav />
        <ContactHeader>
          <Flex mb={[rem(40), rem(40), 'initial']} flexDirection="column">
            <Text mb={rem(14)} variant="bodySmall" color={theme.colors.gray}>
              Begin a Project
            </Text>
            <Text variant="headingSmall" color={theme.colors.gray}>
              get in touch
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            maxWidth={[rem(240), rem(240), rem(330)]}
            ml="auto"
            textAlign="right"
          >
            <Text mb={rem(12)} variant="highlight">
              OUR INTAKE PROCESS
            </Text>
            <Text variant="bodySmall" color={theme.colors.textGray}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper odio eunum dignissim porta.
            </Text>
          </Flex>
        </ContactHeader>
      </HeaderWrap>
      <PageBackground>
        <PageContent>
          <FormHeader>
            <Box width={[1, 1, 1 / 2]} mb={[rem(35), rem(35), rem(40)]}>
              <Text variant={['headingMobile', 'headingMobile', 'heading']}>
                start today
              </Text>
            </Box>
            <Box width={[1, 1, 1 / 2]} mt={['initial', 'initial', rem(16)]}>
              <Text variant="highlight" mb={[rem(16), rem(16), rem(24)]}>
                OUR INTAKE PROCESS
              </Text>
              <Text variant="body" mb={[rem(24), rem(24)]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus semper odio eunum dignissim
                porta.
              </Text>
              <Text variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus semper odio eunum dignissim
                porta.
              </Text>
            </Box>
          </FormHeader>
          <FormSection />
          <Flex flexDirection="column" textAlign="center" alignItems="center">
            <Text variant="heading" className="ty-text">
              thank you for taking the time to fill this form out.
            </Text>
            <PrimaryButton mb={rem(62)} large>
              submit form
            </PrimaryButton>
            <Text
              variant="body"
              mb={[rem(20), rem(20), rem(24)]}
              maxWidth={rem(764)}
            >
              If you have submitted the above form and feel confident that
              you’re ready to begin a project with Nishi Design + Studio, you
              can then book an intro call with Nishi.
            </Text>
            <PrimaryButton mb={rem(77)} large>
              book an intro call
            </PrimaryButton>
          </Flex>
        </PageContent>
      </PageBackground>
      <VendorsContractors />
      <BottomLayout>
        <StartYourSpace hasLogo />
        <SocialSection />
      </BottomLayout>
      <SignupSection />
      <Footer />
    </>
  );
}
