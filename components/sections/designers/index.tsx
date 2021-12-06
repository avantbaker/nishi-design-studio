import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import { PrimaryButton } from 'components/common/button';

const FullWidthContainer = styled.div`
  background-color: ${theme.colors.lightTan};
`;

const Container = styled.section`
  position: relative;
  max-width: ${rem(1440)};
  margin: 0 auto;
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  padding-top: ${rem(187)};
  padding-bottom: ${rem(63)};

  :before {
    content: '';
    display: block;
    height: ${rem(1)};
    width: 50%;
    background-color: ${theme.colors.tan};
    position: absolute;
    top: 0;
    left: 0;
  }

  .space-mobile {
    padding-left: ${rem(30)};
    text-align: right;
  }

  .your {
    width: 100%;
  }

  .text-content {
    z-index: 1;
  }
  .content-right {
    z-index: 1;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 0;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    height: ${rem(434)};

    :after {
      content: '';
      background-image: url(/images/your-space-bg.png);
      background-size: cover;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: ${rem(315)};
      z-index: -1;
    }

    .your {
      width: auto;
    }

    .text-content {
      max-width: ${rem(379)};
      margin-left: initial;
      margin-right: 0;
    }

    .content-right {
      height: 100%;
      padding-top: initial;
      align-items: center;
      display: flex;
    }
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    padding: 0;
  }
`;

const SquareWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: initial;
  }
`;

const Square = styled.div`
  width: 100%;
  padding-bottom: calc(100% - 12px);
  position: relative;
  background-color: ${theme.colors.green};
  overflow: hidden;

  img {
    width: 100vw;
    position: absolute;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(434)};
    height: ${rem(434)};
    padding-bottom: initial;
    transform: none;

    img {
      width: ${rem(434)};
      height: ${rem(434)};
      position: relative;
    }
  }
`;

export default function Designers() {
  return (
    <FullWidthContainer>
      <Container>
        <Box
          width={[1, 1, 1 / 2]}
          className="text-content"
          flexDirection="column"
          alignItems={['flex-start', 'flex-start', 'flex-end']}
          display="flex"
          m="0 auto"
          zIndex={1}
        >
          <Flex
            flexWrap="wrap"
            justifyContent={['flex-start', 'flex-start', 'flex-end']}
            mt={[rem(72), rem(72), 'initial']}
            mr={[0, 0, rem(100)]}
          >
            <Text
              textAlign={['left', 'left', 'right']}
              variant="highlight"
              width={rem(265)}
              ml={[0, 0, 'auto']}
            >{`LET'S REALLY WORK TOGETHER`}</Text>
            <Text
              className="your"
              variant={[
                'headingMobile',
                'headingMobile',
                'headingMobile',
                'heading',
              ]}
            >
              designers
            </Text>
          </Flex>
        </Box>
        <Box
          className="content-right"
          width={[1, 1, 1 / 2]}
          pt={[rem(48), rem(48), 'initial']}
        >
          <Flex pt={[null, null, rem(32)]} flexDirection={'column'}>
            <Text
              variant="body"
              color={theme.colors.gray}
              maxWidth={rem(432)}
              mb={[rem(40)]}
            >
              Our work is where you play. We’ll handle the heavy installations
              and obsess over the hardware. You kick your feet up and relax.
              From pouring the concrete, to poring over color swatches, to
              pouring your first drink in the finished space– we’re with you.
            </Text>
            <PrimaryButton large>career inquiries</PrimaryButton>
          </Flex>
        </Box>
        <SquareWrap>
          <Square>
            <img src="/images/tan-triangle.png" />
          </Square>
        </SquareWrap>
      </Container>
    </FullWidthContainer>
  );
}
