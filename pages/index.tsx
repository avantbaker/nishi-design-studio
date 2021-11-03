import { breakpoints } from 'styles/media';
import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Footer from 'components/common/footer';
import styled from 'styled-components';

import { rem } from 'polished';
import SliderSection from 'components/common/slider-section';
import SocialSection from 'components/common/social-section';
import SignupSection from 'components/common/signup-section';
import StartYourSpace from 'components/common/start-your-space';
import ExpertiseSection from 'components/common/expertise-section';
import MediaSection from 'components/common/media-section';
import YourSpace from 'components/common/your-space';

const TopSection = styled.section`
  position: relative;
  overflow: hidden;
  :before {
    content: '';
    background-image: url('/images/tan-bg.png');
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    :before {
      background-size: cover;
    }
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

export default function Home() {
  return (
    <>
      <TopSection>
        <Nav />
        <SliderSection />
        <YourSpace />
      </TopSection>
      <ExpertiseSection />
      <MediaSection />
      <BottomLayout>
        <StartYourSpace />
        <SocialSection />
      </BottomLayout>
      <SignupSection />
      <Footer />
    </>
  );
}
