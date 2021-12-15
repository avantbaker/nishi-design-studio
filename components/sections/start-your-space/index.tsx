import Link from 'next/link';
import Image from 'next/image';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import theme from 'styles/theme';
import { Flex } from 'rebass/styled-components';
import styled, { css } from 'styled-components';
import Text from 'components/common/text';
import { PrimaryButton } from 'components/common/button';

const FullWidthContainer = styled.section`
  background-color: ${(props) =>
    props?.noBackground ? 'transparent' : `${theme.colors.lightTan}`};
`;

const Container = styled(Flex)`
  max-width: ${rem(1440)};
  margin: 0 auto;
  position: relative;
  padding: ${rem(54)} ${rem(20)} ${rem(86)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ hasLogo }) =>
    hasLogo &&
    css`
      padding-top: ${rem(107)};
    `}

  a {
    margin-bottom: ${rem(6)};
  }

  button {
    width: ${rem(274)};
    margin: 0 auto;
  }

  img {
    width: ${rem(72)};
    @media only screen and (min-width: ${breakpoints.tablet}) {
      width: ${rem(110)};
    }
  }
`;

const ImgWrap = styled.div`
  width: ${rem(130)};
  height: ${rem(168)};
  position: absolute;
  left: calc(50% - 65px);
  top: -${rem(82)};

  @media only screen and (min-width: ${breakpoints.laptop}) {
    width: ${rem(274)};
    height: ${rem(353)};
    left: ${rem(85)};
    padding-top: ${rem(13)};
    top: -${rem(200)};

    img {
      width: 100%;
    }
  }
`;

export default function StartYourSpace({
  hasLogo,
  hasLargeLogo,
  noBackground,
  ...rest
}: {
  hasLogo?: boolean;
  hasLargeLogo?: boolean;
  noBackground?: boolean;
}) {
  return (
    <FullWidthContainer noBackground={noBackground}>
      <Container hasLogo {...rest}>
        {hasLargeLogo && (
          <ImgWrap>
            <Image
              alt="Nishi Logo"
              src="/images/signature-ochre.png"
              width="274px"
              height="353px"
            />
          </ImgWrap>
        )}
        {hasLogo && (
          <Link href="/">
            <a>
              <img
                alt="LOGO NISHI design+studio"
                className="logoImg"
                src="/images/nishi-slate.png"
              />
            </a>
          </Link>
        )}
        <Text
          mb={[rem(16), rem(29)]}
          width={[rem(250), rem(250), 'auto']}
          variant={['headingMobile', 'headingMobile', 'heading']}
        >
          start your space.
        </Text>
        <Text
          maxWidth={rem(554)}
          mb={[rem(25), rem(25)]}
          variant={['body', 'body', 'bodyLarge']}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          semper odio eunum dignissim porta.
        </Text>
        <Link href="/contact" passHref>
          <PrimaryButton large>start a project</PrimaryButton>
        </Link>
      </Container>
    </FullWidthContainer>
  );
}
