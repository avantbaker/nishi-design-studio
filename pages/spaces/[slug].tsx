import styled from 'styled-components';
import theme from 'styles/theme';
import Link from 'next/link';
import Image from 'next/image';
import { SecondaryButton } from 'components/common/button';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import Nav from 'components/common/nav';
import StartYourSpace from 'components/sections/start-your-space';
import BrandsParters from 'components/sections/brands-partners';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import ImageGrid from 'components/common/image-grid';
import DarkSlider from 'components/common/dark-slider';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';

const PageContent = styled.section`
  background-color: ${theme.colors.lightTan};
`;

const Divider = styled.div`
  padding: ${rem(12)} 0;
`;

const StartYourSpaceTan = styled(StartYourSpace)`
  background-color: ${theme.colors.lightTan};
`;

const StyledImageGrid = styled(ImageGrid)`
  margin-left: -${rem(24)};

  @media only screen and (min-width: ${breakpoints.mobileLarge}) {
    margin-left: 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  max-width: ${rem(275)};
  margin-left: auto;
  margin-right: 0;

  li {
    font-size: ${rem(14)};
    color: ${theme.colors.gray};
    text-align: right;
    width: 50%;
    padding: ${rem(2)} 0;
  }
`;

const BannerContainer = styled.div`
  position: relative;
  height: ${rem(362)};
  margin-bottom: ${rem(42)};
  width: 100vw;
  margin-left: -${rem(26)};

  img {
    object-fit: cover;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-left: 0;
  }
`;

const BannerWrap = styled.div`
  position: relative;
  height: ${rem(205)};
  width: 100vw;
  margin: 0 auto;
  margin-left: -${rem(26)};

  img {
    transition transform 0.5s ease-in-out;
  }

  :hover img {
    transform: scale(1.05);
  }

  @media only screen and (min-width: ${breakpoints.mobileLarge}) {
    width: 100%;
    margin-left: 0;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    height: ${rem(452)};
    width: 100%;
    margin-left: auto;
  }
`;

const NextSpace = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  color: ${theme.colors.orange};
  font-weight: 800;
  font-size: ${rem(15)};
  line-height: ${rem(18)};
  letter-spacing: ${rem(0.15)};

  :before {
    content: '';
    width: ${rem(34)};
    height: ${rem(34)};
    border: ${rem(1)} solid ${theme.colors.orange};
    border-radius: 50%;
    position: absolute;
    left: 45%;
  }
`;

const GoldLineLeft = styled.img`
  width: 53%;
  height: ${rem(180)};
  position: absolute;
  left: -${rem(75)};
  top: ${rem(375)};
`;
const GoldLineRight = styled.img`
  height: ${rem(62.12)};
  width: 50%;
  right: 0;
  top: ${rem(490)};
  position: absolute;
`;

const ArrowRightSolid = styled.div`
  background-image: url('/images/active-right-arrow.png');
  background-size: cover;
  width: ${rem(34)};
  height: ${rem(34)};
  margin-left: ${rem(11)};
  cursor: pointer;
  position: relative;
  border-radius: 50%;
`;

export default function ResidencePage() {
  const isTablet = useMediaQuery(queries.minTablet);

  const items = [
    {
      title: 'Our process',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
      src: '/images/dark-slider-placeholder.png',
    },
    {
      title: 'Our process',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
      src: '/images/dark-slider-placeholder.png',
    },
    {
      title: 'Our process',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
      src: '/images/dark-slider-placeholder.png',
    },
    {
      title: 'Our process',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
      src: '/images/dark-slider-placeholder.png',
    },
    {
      title: 'Our process',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
      src: '/images/dark-slider-placeholder.png',
    },
  ];

  return (
    <motion.div {...framerOptions}>
      <PageContent>
        <Nav />
        <Flex
          maxWidth={rem(1044)}
          flexDirection="column"
          margin="0 auto"
          mt={[rem(2), rem(2)]}
          px={[rem(26), rem(26)]}
          mb={[rem(128), rem(128), rem(134)]}
        >
          <Flex
            flexDirection={['column', 'column', 'row']}
            justifyContent="space-between"
          >
            <Box width={[1, 1, 1 / 4]} mb={[rem(43), rem(43)]}>
              <Flex justifyContent="space-between">
                <Text mb={[rem(12), rem(12)]} variant="bodySmall">
                  New York, NY
                </Text>
                <Text variant="bodySmall" fontSize={rem(15)}>
                  2021
                </Text>
              </Flex>
              <Text variant="headingSmall" width={['60%', '60%']}>
                elemental villa
              </Text>
            </Box>
            <Box width={[1, 1, 1 / 3]} pb={[rem(30), rem(30)]}>
              <Text
                variant="highlight"
                width={['60%', '60%']}
                ml={['auto', 'auto']}
                textAlign={['right', 'right']}
              >
                EXPERTISE RENDERED
              </Text>
              <List>
                <li>Planning</li>
                <li>Design Operation</li>
                <li>Ordering + Buying</li>
                <li>Planning</li>
                <li>Design Operation</li>
                <li>Ordering + Buying</li>
              </List>
            </Box>
          </Flex>
          {isTablet && (
            <>
              <GoldLineLeft alt="Gold line" src="/images/blog-lines-left.png" />
              <GoldLineRight
                alt="Gold line"
                src="/images/blog-lines-right.png"
              />
            </>
          )}
          <BannerContainer>
            <Image
              src={`/elements/residential/residence-detail${
                !isTablet ? '-small' : ''
              }.png`}
              layout="fill"
            />
          </BannerContainer>
          <Flex flexDirection={['column', 'column', 'row']}>
            <Box width={[1, 1, 2 / 6]}>
              <Text
                mb={[rem(12), rem(12)]}
                variant="highlight"
                width={['60%', '60%']}
              >
                RESIDENTIAL FULL HOME
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
                porta.
              </Text>
            </Box>
          </Flex>
          <StyledImageGrid />
          <BannerWrap>
            <Image
              alt="Residential banner"
              src={`${
                isTablet
                  ? '/elements/residential/residence-banner.png'
                  : '/elements/residential/residence-banner-mobile.png'
              }`}
              layout="fill"
            />
          </BannerWrap>
        </Flex>
        <BrandsParters />
        <DarkSlider />
        <Flex
          maxWidth={rem(400)}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={['column', 'column', 'row']}
          ml="auto"
          mr="auto"
          mt={[rem(40), rem(40), rem(64)]}
        >
          <Link href="/spaces">
            <a>
              <SecondaryButton mr={[rem(40), null, null]} large arrowLeft>
                back to gallery
              </SecondaryButton>
            </a>
          </Link>
          <Link href="/" passHref>
            <NextSpace>
              next space
              <ArrowRightSolid />
            </NextSpace>
          </Link>
        </Flex>
        <StartYourSpace hasLogo />
        <Footer />
      </PageContent>
    </motion.div>
  );
}
