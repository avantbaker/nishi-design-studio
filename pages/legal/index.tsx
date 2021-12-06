import { Flex, Box } from 'rebass/styled-components';
import Footer from 'components/common/footer';
import Nav from 'components/common/nav';
import Text from 'components/common/text';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';

const PageContent = styled.div`
  background-color: ${theme.colors.lightTan};
`;

const Container = styled.section`
  padding: ${rem(2)} ${rem(28)} 0 ${rem(28)};
  max-width: ${rem(1042)};
  margin: 0 auto;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-top: ${rem(40)};
  }
`;

export default function Legal() {
  return (
    <motion.div {...framerOptions}>
      <PageContent>
        <Nav />
        <Container>
          <Flex
            width={[1, 1, rem(271)]}
            justifyContent="space-between"
            mb={[rem(16), rem(16), rem(35)]}
          >
            <Text variant="bodySmall" color={theme.colors.gray}>
              Terms & Conditions
            </Text>
            <Text variant="bodySmall" color={theme.colors.gray}>
              Privacy
            </Text>
          </Flex>
          <Text
            mb={[rem(45), rem(45), rem(71)]}
            variant="headingSmall"
            color={theme.colors.gray}
          >
            legal
          </Text>
          <Flex
            flexDirection={['column', 'column', 'row']}
            mb={[rem(53), rem(53), rem(71)]}
          >
            <Box width={[1, 1, 1 / 4]}>
              <Text mb={[rem(17), rem(17)]} variant="highlight">
                TERMS & CONDITIONS
              </Text>
            </Box>
            <Box width={[1, 1, 3 / 4]}>
              <Text variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus semper odio eunum dignissim
                porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Vivamus semper odio eunum
                dignissim porta. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vivamus semper odio eunum dignissim porta.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus semper odio eunum dignissim
                porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Vivamus semper odio eunum
                dignissim porta. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vivamus semper odio eunum dignissim porta.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus semper odio eunum dignissim
                porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Vivamus semper odio eunum
                dignissim porta. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vivamus semper odio eunum dignissim porta.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus semper odio eunum dignissim
                porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus semper odio eunum dignissim porta.
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection={['column', 'column', 'row']}>
            <Box width={[1, 1, 1 / 4]}>
              <Text mb={[rem(17), rem(17)]} variant="highlight">
                PRIVACY
              </Text>
            </Box>
            <Box width={[1, 1, 3 / 4]}>
              <Text variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus semper odio eunum dignissim
                porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Vivamus semper odio eunum
                dignissim porta. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vivamus semper odio eunum dignissim porta.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus semper odio eunum dignissim
                porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus semper odio eunum dignissim porta.
              </Text>
            </Box>
          </Flex>
        </Container>
        <Footer />
      </PageContent>
    </motion.div>
  );
}
