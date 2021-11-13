import { breakpoints } from 'styles/media';
import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import StartYourSpace from 'components/sections/start-your-space';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import SocialSection from 'components/sections/social-section';
import SignupSection from 'components/sections/signup-section';

const PageWrap = styled.section`
  background-color: ${theme.colors.lightTan};
  background-image: url('/images/contact-bg.png');
  background-position: 0 ${rem(363)};
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    background-position: 0 ${rem(328)};
  }
`;

const PageContent = styled.div`
  max-width: ${rem(1123)};
  margin: 0 auto;
  padding: 0 ${rem(28)};
`;

const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(4)} 0 ${rem(28)} 0;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: 0;
    margin-top: ${rem(69)};
    padding: ;
  }
`;

const FormHeader = styled(Flex)`
  flex-direction: column;
  padding-top: ${rem(62)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    margin-top: ${rem(125)};
  }
`;

const BottomLayout = styled.div`
  position: relative;
  overflow: hidden;
  :before {
    content: '';
    background-image: url('/images/tan-bg.png');
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  :after {
    content: '';
    background-color: ${theme.colors.lightTan};
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: ${rem(216)};
    z-index: -1;
  }
`;

export default function Contact() {
  return (
    <PageWrap>
      <Nav />
      <PageContent>
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
      </PageContent>
      <BottomLayout>
        <StartYourSpace hasLogo />
        <SocialSection />
      </BottomLayout>
      <SignupSection />
      <Footer />
    </PageWrap>
  );
}
