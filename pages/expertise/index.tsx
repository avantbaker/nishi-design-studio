import theme from 'styles/theme';
import Nav from 'components/common/nav';
import styled from 'styled-components';
import { rem } from 'polished';
import AboutHeader from 'components/sections/about-header';
import ExpertisePageContent from 'components/sections/expertise-page-content';
import StartYourSpace from 'components/sections/start-your-space';
import Footer from 'components/common/footer';

const PageContent = styled.section`
  background-color: ${theme.colors.lightTan};
  background-image: url('/images/tan-bg.png');
  overflow-x: hidden;
`;

const HeaderWrap = styled.div`
  margin-bottom: ${rem(56)};
`;

export default function Expertise() {
  return (
    <PageContent>
      <HeaderWrap>
        <Nav />
        <AboutHeader />
      </HeaderWrap>
      <ExpertisePageContent />
      <StartYourSpace />
      <Footer />
    </PageContent>
  );
}
