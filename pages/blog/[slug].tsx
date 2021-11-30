import styled from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import RelatedArticles from 'components/sections/related-articles';
import Nav from 'components/common/nav';
import { SecondaryButton } from 'components/common/button';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import Link from 'next/link';
import Twitter from 'components/common/icons/twitter';
import LinkedIn from 'components/common/icons/linkedin';
import Facebook from 'components/common/icons/facebook';

const PageContent = styled.section`
  background-color: ${theme.colors.lightTan};

  .button-link {
    margin-bottom: ${rem(27)};
    @media only screen and (min-width: ${breakpoints.tablet}) {
      margin-bottom: 0;
      margin-right: ${rem(16)};
    }
  }
`;

const BannerContainer = styled.div`
  position: relative;
  margin-bottom: ${rem(42)};
  width: 100vw;
  height: ${rem(216)};
  margin-left: -${rem(26)};

  img {
    object-fit: cover;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: 100%;
    height: ${rem(362)};
    margin-left: 0;
  }
`;

const Divider = styled.div`
  padding: ${rem(12)} 0;
`;

const SocialFlex = styled(Flex)`
  a {
    padding: ${rem(4)};
  }
`;

const GoldLineLeft = styled.img`
  width: ${rem(462)};
  height: ${rem(180)};
  position: absolute;
  left: -${rem(24)};
  top: 50%;
`;
const GoldLineRight = styled.img`
  height: ${rem(62.12)};
  width: ${rem(301.72)};
  right: 0;
  top: 60%;
  position: absolute;
`;

export default function BlogDetail() {
  const isTablet = useMediaQuery(queries.minTablet);
  return (
    <PageContent>
      <Nav />
      <Flex
        maxWidth={rem(1044)}
        flexDirection="column"
        margin="0 auto"
        mt={[rem(2), rem(2)]}
        px={rem(26)}
        mb={[rem(128), rem(128), rem(134)]}
      >
        <Flex
          flexDirection={['column', 'column', 'row']}
          justifyContent="space-between"
        >
          <Box width={[1, 1, rem(300)]} mb={[rem(43), rem(43)]}>
            <Flex justifyContent="space-between" mb={[rem(26), rem(26)]}>
              <Text
                mb={[rem(12), rem(12)]}
                variant="bodySmall"
                color={theme.colors.gray}
              >
                12.24.2021
              </Text>
              <Text
                variant="bodySmall"
                fontSize={rem(15)}
                color={theme.colors.gray}
              >
                Decor | Process | NDS
              </Text>
            </Flex>
            <Text
              variant="headingSmall"
              mb={[rem(3), rem]}
              width={['50%', '50%', '100%']}
            >
              pillows galore
            </Text>
          </Box>
        </Flex>
        {isTablet && (
          <>
            <GoldLineLeft alt="Gold line" src="/images/blog-lines-left.png" />
            <GoldLineRight alt="Gold line" src="/images/blog-lines-right.png" />
          </>
        )}
        <BannerContainer>
          <Image
            alt="Nishi blog"
            src={`/images/blog-detail.png`}
            layout="fill"
          />
        </BannerContainer>
        <Flex flexDirection={['column', 'column', 'row']}>
          <Box width={[1, 1, 2 / 6]}>
            <Text mb={[rem(36), rem(36), rem(12)]} variant="highlight">
              INTRO TEXT THAT IS LONGER
            </Text>
          </Box>
          <Box width={[1, 1, 4 / 6]}>
            <Text
              variant="body"
              mb={[rem(47), rem(47)]}
              color={theme.colors.textGray}
              className="text-content"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus semper odio eunum dignissim
              porta.
              <Divider />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus semper odio eunum dignissim
              porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vivamus semper odio eunum
              dignissim porta.
              <Divider />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus semper odio eunum dignissim
              porta.
              <Divider />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus semper odio eunum dignissim
              porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vivamus semper odio eunum
              dignissim porta.
              <Divider />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus semper odio eunum dignissim
              porta.
              <Divider />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus semper odio eunum dignissim
              porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vivamus semper odio eunum
              dignissim porta.
            </Text>
            <Flex
              flexDirection={['column', 'column', 'row']}
              alignItems={['flex-start', 'flex-start', 'center']}
              justifyContent="space-between"
            >
              <Link href="/">
                <a className="button-link">
                  <SecondaryButton large>outbound link</SecondaryButton>
                </a>
              </Link>
              <Flex flexDirection={['column', 'column', 'row']} pr={rem(16)}>
                <Text
                  variant="highlight"
                  lineHeight={['initial', 'initial', rem(40)]}
                  color={theme.colors.orange}
                  mr={rem(16)}
                  mb={[rem(15), rem(15), 'initial']}
                  width={['80%', '80%', '100%']}
                  display={['block', 'block', 'none', 'block']}
                >
                  SHARE THIS ARTICLE
                </Text>
                <SocialFlex>
                  <Link href="https://twitter.com/nishidesignatl">
                    <a>
                      <Twitter fill={theme.colors.orange} />
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/nishidesignstudio/">
                    <a>
                      <Facebook fill={theme.colors.orange} />
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/nishidonovan/">
                    <a>
                      <LinkedIn fill={theme.colors.orange} />
                    </a>
                  </Link>
                </SocialFlex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <RelatedArticles />
      </Flex>
      <Footer />
    </PageContent>
  );
}
