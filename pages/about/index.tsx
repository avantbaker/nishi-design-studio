import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import MediaSection from 'components/sections/media-section';
import StartYourSpace from 'components/sections/start-your-space';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import SimpleHeader from 'components/sections/simple-header';
import TeamSlider from 'components/sections/team-slider';
import MeetTheBoss from 'components/sections/meet-the-boss';
import ImageGrid from 'components/common/image-grid';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';

const HeaderWrap = styled.section`
  background-color: ${theme.colors.lightTan};
  background-image: url('/images/tan-bg.png');
  overflow-x: hidden;
`;

const ContentWrap = styled.div`
  background-color: ${theme.colors.lightTan};
`;
const MiddleWrap = styled.div`
  background-color: ${theme.colors.lightTan};
  background-image: url('/images/tan-bg.png');
  background-size: cover;
`;

const OffsetText = styled(Text)`
  margin-left: ${rem(40)};
`;

export default function About() {
  return (
    <motion.div {...framerOptions}>
      <HeaderWrap>
        <Nav />
        <SimpleHeader
          src="/images/about-header-image.png"
          title="lorem ipsum"
          subTitle="lorem ipsum dolor"
        />
      </HeaderWrap>
      <MediaSection />
      <MiddleWrap>
        <MeetTheBoss />
        <TeamSlider />
      </MiddleWrap>
      <ContentWrap>
        <Flex
          maxWidth={rem(1076)}
          m="0 auto"
          flexDirection={['column', 'column', 'row']}
          p={`${rem(88)} ${rem(24)} ${rem(91)} ${rem(24)}`}
        >
          <Box width={[1, 1, 1 / 2]}>
            <Text variant="highlight" mb={[rem(14), rem(14)]}>
              LOREM IPSUM
            </Text>
            <Flex flexDirection="column" mb={(rem(32), rem(32))}>
              <Text variant={['headingMobile', 'headingMobile', 'heading']}>
                about
              </Text>
              <OffsetText
                variant={['headingMobile', 'headingMobile', 'heading']}
              >
                the brand
              </OffsetText>
            </Flex>
          </Box>
          <Box width={[1, 1, 1 / 2]}>
            <Text variant="body" mb={[rem(34), rem(34)]}>
              Our work is where you play. We’ll handle the heavy installations
              and obsess over the hardware. You kick your feet up and relax.
              From pouring the concrete, to poring over color swatches, to
              pouring your first drink in the finished space– we’re with you.
            </Text>
            <Text variant="body">
              Our work is where you play. We’ll handle the heavy installations
              and obsess over the hardware. You kick your feet up and relax.
              From pouring the concrete, to poring over color swatches, to
              pouring your first drink in the finished space– we’re with you.
            </Text>
          </Box>
        </Flex>
        <Flex px={['initial', 'initial', rem(28), rem(28)]}>
          <ImageGrid />
        </Flex>
      </ContentWrap>
      <StartYourSpace hasLogo />
      <Footer />
    </motion.div>
  );
}
