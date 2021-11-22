import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';

const Container = styled.section`
  position: relative;

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

  @media only screen and (min-width: ${breakpoints.tablet}) {
    .right-box {
      position: relative;
      z-index: 1;
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

const LineImg = styled.img`
  height: ${rem(115)};
  width: ${rem(22.26)};
  position: absolute;
  top: 20%;
  right 0;
  transform: translate(-50%, -40%) scaleX(-1) rotate(118deg);

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
    height: ${rem(770)};
    width: ${rem(126)};
    position: absolute;
    top: 20%;
    right: ${rem(170)};
    z-index: -1;
    transform: translate(-50%, -40%) scaleX(-1) rotate(118deg);
  }
`;

export default function SimpleHeader({ src, title, subTitle }) {
  return (
    <Container>
      <Flex
        flexDirection={['column', 'column', 'row']}
        pr={[rem(55), rem(55), rem(24)]}
      >
        <Box
          className="left-box"
          css={{ zIndex: 999 }}
          width={[1, 1, 1 / 2, 3 / 5]}
        >
          <Image alt="Nishi About" src={src} layout="fill" />
        </Box>
        <Box
          width={[1, 1, 1 / 2, 2 / 5]}
          className="right-box"
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
              {subTitle && subTitle.toUpperCase()}
            </Text>
            <Text
              variant={['headingMobile', 'headingMobile', 'heading']}
              color={theme.colors.gray}
              className="header-text"
              width={[rem(150), rem(150), rem(250)]}
            >
              {title}
            </Text>
            <LineImg
              alt="gold line"
              src="/elements/goldlines/Gold-Line-4.png"
            />
          </TextContentRight>
        </Box>
      </Flex>
    </Container>
  );
}
