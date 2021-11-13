import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';

const Container = styled.section`
  .left-box {
    position: relative;
    height: ${rem(361)};

    img {
      object-fit: cover;
    }
    @media only screen and (min-width: ${breakpoints.tablet}) {
      height: ${rem(630)};
    }
  }

  .header-text {
    text-indent: -${rem(50)};
    margin-left: ${rem(50)};

    @media only screen and (min-width: ${breakpoints.tablet}) {
      text-indent: -${rem(120)};
      margin-left: ${rem(62)};
    }
  }
`;

const TextContentRight = styled.div`
  width: ${rem(200)};
  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(350)};
    margin: 0 auto;
  }
`;

export default function AboutHeader() {
  return (
    <Container>
      <Flex
        flexDirection={['column', 'column', 'row']}
        pr={[rem(55), rem(55), rem(24)]}
      >
        <Box className="left-box" width={[1, 1, 1 / 2, 3 / 5]}>
          <Image
            alt="Nishi About"
            src="/images/about-header-image.png"
            layout="fill"
          />
        </Box>
        <Box
          width={[1, 1, 1 / 2, 2 / 5]}
          display="flex"
          flexDirection="column"
          textAlign={['left', 'left', 'center']}
          justifyContent={['initial', 'initial', 'flex-end']}
          p={[
            `${rem(34)} ${rem(40)} ${rem(35)} ${rem(28)}`,
            `${rem(34)} ${rem(40)} ${rem(35)} ${rem(28)}`,
            `${rem(34)} ${rem(40)} ${rem(139)} ${rem(28)}`,
          ]}
        >
          <TextContentRight>
            <Text
              pb={[rem(19), rem(19)]}
              variant="highlight"
              color={theme.colors.gray}
            >
              LOREM IPSUM DOLOR
            </Text>
            <Text
              variant={['headingMobile', 'headingMobile', 'heading']}
              color={theme.colors.gray}
              className="header-text"
            >
              lorem ipsum
            </Text>
          </TextContentRight>
        </Box>
      </Flex>
    </Container>
  );
}
