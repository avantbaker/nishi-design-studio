import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Footer from 'components/common/footer';
import BrandsParters from 'components/sections/brands-partners';
import styled from 'styled-components';
import PressHeader from 'components/sections/press-header';
import PressArticles from 'components/sections/press-articles';

const PageContent = styled.section`
  background-color: ${theme.colors.lightTan};
`;

export default function Press() {
  return (
    <PageContent>
      <Nav />
      <PressHeader />
      <PressArticles />
      <BrandsParters />
      <Footer />
    </PageContent>
  );
}
