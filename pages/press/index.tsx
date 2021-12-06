import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Footer from 'components/common/footer';
import BrandsParters from 'components/sections/brands-partners';
import styled from 'styled-components';
import PressHeader from 'components/sections/press-header';
import PressArticles from 'components/sections/press-articles';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';

const PageContent = styled.section`
  background-color: ${theme.colors.lightTan};
`;

export default function Press() {
  return (
    <motion.div {...framerOptions}>
      <PageContent>
        <Nav />
        <PressHeader />
        <PressArticles />
        <BrandsParters />
        <Footer noPadding />
      </PageContent>
    </motion.div>
  );
}
