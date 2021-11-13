import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Footer from 'components/common/footer';
import styled from 'styled-components';
import { rem } from 'polished';
import useMediaQuery from 'hooks/use-media-query';
import { breakpoints, queries } from 'styles/media';
import StartYourSpace from 'components/sections/start-your-space';
import ResidentialSection from 'components/sections/residential-section';

const PageContent = styled.div`
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
`;

const StartYourSpaceTan = styled(StartYourSpace)`
  background-color: ${theme.colors.lightTan};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-top: ${rem(121)};
  }
`;

export default function Residential() {
  const isTablet = useMediaQuery(queries.minTablet);
  return (
    <>
      <PageContent>
        <Nav />
        <ResidentialSection />
        <StartYourSpaceTan />
        <Footer />
      </PageContent>
    </>
  );
}
