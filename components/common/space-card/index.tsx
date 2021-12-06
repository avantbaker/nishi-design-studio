import React from 'react';
import { rem } from 'polished';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import Text from 'components/common/text';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { SecondaryButton } from 'components/common/button';

const ArrowRight = styled.div`
  background-image: url('/images/active-right-arrow.png');
  background-size: cover;
  border-radius: 50%;
  transform: initial;
  width: ${rem(34)};
  height: ${rem(34)};
`;

const Container = styled.div`
  margin-bottom: ${rem(44)};

  ${ArrowRight} {
    display: none;
    margin-left: auto;
  }

  :hover img {
    transform: scale(1.05);
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    margin-bottom: ${rem(49)};

    :hover .right-box {
      button > svg {
        visibility: hidden;
      }

      :after {
        position: absolute;
        content: '';
        background-color: #fff;
        display: block;
        z-index: -1;
        width: 100%;
        height: ${rem(250)};
      }

      .space-heading {
        z-index: 100;
        position: relative;
        :after {
          content: '';
          display: block;
          border-radius: 50%;
          border: 1px solid ${theme.colors.orange};
          width: ${rem(34)};
          height: ${rem(34)};
          position: absolute;
          right: -${rem(4)};
          top: 0;
          z-index: -1;
        }
      }

      ${ArrowRight} {
        display: block;
      }
    }
  }
`;

const InnerContainer = styled.div`
  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(550)};
    margin: 0 auto;
  }
  @media only screen and (min-width: ${breakpoints.laptop}) {
    display: flex;
    width: auto;
  }
`;

const YearText = styled(Text)`
  font-size: ${rem(15)};
  line-height: ${rem(51)};
`;

const ImgWrap = styled.div`
  position: relative;
  height: ${rem(250)};
  margin-bottom: ${rem(24)};

  img {
    object-fit: cover;
		transition transform 0.5s ease-in-out;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(550)};
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    margin-bottom: 0;
  }
`;

export default function SpaceCard({
  location,
  year,
  title,
  href,
  src,
  ...rest
}) {
  return (
    <Container {...rest}>
      <Link href="/spaces/testpage">
        <a>
          <InnerContainer>
            <Flex
              flexDirection={['row', 'row', 'row', 'column']}
              alignItems={['center', 'center', 'center', 'flex-start']}
              justifyContent={[
                'space-between',
                'space-between',
                'space-between',
                'flex-start',
              ]}
              width={['100%', '100%', '100%', rem(100)]}
              mr={rem(10)}
            >
              <Text
                variant="caption"
                letterSpacing="normal"
                color={theme.colors.gray}
              >
                {location}
              </Text>
              <YearText
                variant="caption"
                letterSpacing="normal"
                color={theme.colors.gray}
              >
                {year}
              </YearText>
            </Flex>
            <ImgWrap>
              <Image alt={title} src={src} layout="fill" />
            </ImgWrap>
            <Flex flexDirection="column" flexGrow={1} className="right-box">
              <Box
                m={[null, null, null, `${rem(40)} 30% 0 auto`]}
                pl={[null, null, null, rem(32)]}
              >
                <Text
                  className="space-heading"
                  width={[null, null, null, rem(285)]}
                  variant={[
                    'headingSmallMobile',
                    'headingSmallMobile',
                    'headingSmall',
                  ]}
                >
                  {title}
                </Text>
                <Flex alignItems="center" justifyContent="space-between">
                  <SecondaryButton>explore</SecondaryButton>
                  <ArrowRight />
                </Flex>
              </Box>
            </Flex>
          </InnerContainer>
        </a>
      </Link>
    </Container>
  );
}
