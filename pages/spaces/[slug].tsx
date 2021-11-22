import styled from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
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
      <StartYourSpace backgroundColor={theme.colors.tan} hasLogo />
      <Footer />
    </PageContent>
  );
}
