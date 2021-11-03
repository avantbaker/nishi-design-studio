import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';

const Container = styled.section`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-left: ${rem(24)};
  padding-right: ${rem(16)};
  padding-top: ${rem(187)};
  padding-bottom: ${rem(194)};
  background-size: ${rem(315)};

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

  .body-text {
    margin-left: 0;
    margin-right: auto;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-top: ${rem(108)};
    padding-bottom: ${rem(194)};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: ${rem(434)};

    :before {
      content: '';
      width: calc(50% - 40px);
      background-color: ${theme.colors.sand};
      position: absolute;
      height: 1px;
      top: 0;
      right: 0;
    }

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

    .body-text {
      padding-left: ${rem(80)};
      padding-right: ${rem(24)};
    }

    .content-right {
      height: 100%;
      padding-top: initial;
      align-items: center;
      display: flex;
      z-index: 1;
    }
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    padding: 0 0 ${rem(27)} 0;

    .body-text {
      padding-left: ${rem(40)};
    }
  }
`;

const SquareWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Square = styled.div`
  width: 100%;
  padding-bottom: calc(100% - 10px);
  position: relative;
  background-color: ${theme.colors.orange};
  opacity: 0.55;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(434)};
    height: ${rem(434)};
    padding-bottom: initial;

    img {
      width: ${rem(434)};
      height: ${rem(434)};
    }
  }
`;

const TextContentWrap = styled.div``;

export default function YourSpace() {
  return (
    <Container>
      <SquareWrap>
        <Square>
          <img src="/images/triangle-orange.png" />
        </Square>
      </SquareWrap>
      <Box
        width={[1, 1, 1 / 2]}
        className="text-content"
        flexDirection="column"
        alignItems="flex-end"
        display="flex"
        m="0 auto"
        zIndex={1}
      >
        <TextContentWrap>
          <Text mb={[rem(5), rem(5)]} variant="highlight">
            PROUDLY PERSONAL
          </Text>
          <Flex flexWrap="wrap">
            <Text className="your" variant="heading">
              your
            </Text>
            <Text className="space-mobile" variant="heading">
              space
            </Text>
          </Flex>
        </TextContentWrap>
      </Box>
      <Box
        className="content-right"
        width={[1, 1, 1 / 2]}
        pt={[rem(48), rem(48), 'initial']}
        zIndex={1}
      >
        <Text
          className="body-text"
          width={[null, null, null, rem(490)]}
          variant="body"
        >
          Our work is where you play. We’ll handle the heavy installations and
          obsess over the hardware. You kick your feet up and relax. From
          pouring the concrete, to poring over color swatches, to pouring your
          first drink in the finished space– we’re with you.
        </Text>
      </Box>
    </Container>
  );
}
