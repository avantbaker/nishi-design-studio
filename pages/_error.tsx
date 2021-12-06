import styled from 'styled-components';
import theme from 'styles/theme';
import { rem } from 'polished';
import Nav from 'components/common/nav';
import Footer from 'components/common/footer';
import Text from 'components/common/text';
import { breakpoints } from 'styles/media';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Container = styled.div`
  background-color: ${theme.colors.lightOrange};
  overflow: auto;
  flex-grow: 1;

  .heading {
    word-break: break-word;
    width: 70%;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    .heading {
      width: 100%;
    }
  }
`;

const TextContent = styled.div`
  padding: 0 ${rem(45)} 0 ${rem(29)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-left: ${rem(186)};
    padding-top: ${rem(42)};
    width: ${rem(549)};
  }
`;

function ErrorPage() {
  return (
    <motion.div {...framerOptions}>
      <PageContainer>
        <Container>
          <Nav />
          <TextContent>
            <Text
              variant="highlight"
              color="#fff"
              mb={[rem(15), rem(15), rem(39)]}
            >{`SOMETHING'S NOT RIGHT`}</Text>
            <Text
              fontFamily={theme.typography.fonts.primary}
              variant="heading"
              className="heading"
              fontWeight="bold"
              mb={[rem(33), rem(33), rem(40)]}
              color={theme.colors.orange}
              wordBreak="break-word"
            >
              404 ERROR
            </Text>
            <Text variant="body" mb={[rem(83), rem(83), rem(162)]} color="#fff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus.
            </Text>
          </TextContent>
        </Container>
        <Footer noPadding />
      </PageContainer>
    </motion.div>
  );
}

export default ErrorPage;
