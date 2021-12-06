import theme from 'styles/theme';
import Nav from 'components/common/nav';
import { Flex } from 'rebass/styled-components';
import Footer from 'components/common/footer';
import styled from 'styled-components';
import { rem } from 'polished';
import { breakpoints } from 'styles/media';
import StartYourSpace from 'components/sections/start-your-space';
import ResidentialSection from 'components/sections/residential-section';
import HeroSlider from 'components/common/hero-slider';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';

const PageContent = styled.div`
  position: relative;
  overflow: hidden;
  :before {
    content: '';
    background-image: url('/images/tan-bg.png');
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const StartYourSpaceTan = styled(StartYourSpace)`
  background-color: ${theme.colors.lightTan};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-top: ${rem(121)};
  }
`;

export default function Residential() {
  return (
    <motion.div {...framerOptions}>
      <PageContent>
        <Nav />
        <HeroSlider />
        <Flex justifyContent="center">
          <ResidentialSection />
        </Flex>
        <StartYourSpaceTan hasLargeLogo />
        <Footer />
      </PageContent>
    </motion.div>
  );
}
