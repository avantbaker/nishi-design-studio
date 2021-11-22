import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import { PrimaryButton } from 'components/common/button';

const Container = styled.section`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-left: ${rem(40)};
  padding-right: ${rem(16)};
  padding-top: ${rem(187)};
  padding-bottom: ${rem(63)};
  background-color: ${theme.colors.lightTan};

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
    padding-top: 0;
    padding-bottom: 0;
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

    .text-content {
      max-width: ${rem(379)};
      margin-left: auto;
      margin-left: auto;
      margin-right: ${rem(40)};
    }

    .content-right {
      height: 100%;
      padding-top: initial;
      align-items: center;
      display: flex;
      border-bottom: ${rem(1)} solid ${theme.colors.tan};
    }
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    padding: 0;
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

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    :first-of-type {
      margin-right: ${rem(24)};
    }
  }
`;

export default function VendorsContractors() {
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
        <Flex flexWrap="wrap" mt={[rem(72), rem(72), 'initial']}>
          <Text variant="highlight">{`LET'S WORK TOGETHER`}</Text>
          <Text
            className="your"
            variant={['headingMobile', 'headingMobile', 'heading']}
          >
            vendors +
          </Text>
          <Text
            className="space-mobile"
            variant={['headingMobile', 'headingMobile', 'heading']}
          >
            contractors
          </Text>
        </Flex>
      </Box>
      <Box
        className="content-right"
        width={[1, 1, 1 / 2]}
        pt={[rem(48), rem(48), 'initial']}
        justifyContent={[null, null, 'center']}
      >
        <Flex pt={[null, null, rem(32)]} flexDirection={'column'}>
          <Text
            variant="body"
            color={theme.colors.gray}
            maxWidth={rem(432)}
            mb={[rem(40)]}
          >
            Our work is where you play. We’ll handle the heavy installations and
            obsess over the hardware. You kick your feet up and relax. From
            pouring the concrete, to poring over color swatches, to pouring your
            first drink in the finished space– we’re with you.
          </Text>
          <PrimaryButton large>connect with us</PrimaryButton>
        </Flex>
      </Box>
    </Container>
  );
}
