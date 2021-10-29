import Text from 'components/common/text';
import styled from 'styled-components';
import ListingCard from 'components/common/listing-card';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${rem(25)};
  margin-left: auto;
  width: ${rem(205)};

  @media only screen and (min-width: ${breakpoints.laptop}) {
    margin-right: 0;
    margin: 0 auto;
    width: ${rem(400)};
  }
`;

const TopFlex = styled(Flex)`
  flex-wrap: wrap-reverse;
  position: relative;
`;

const StyledListingCard = styled(ListingCard)`
  width: 100%;
  @media only screen and (min-width: ${breakpoints.laptop}) {
    position: absolute;
    left: 45%;
    bottom: 7%;
    z-index: 1;
    width: auto;
  }
`;

const PlaceholderImg = styled.img`
  width: 100%;
`;

const MobileLineImg = styled.img`
  transform: scaleY(1) scaleX(-1);
  height: ${rem(75.78)};
  width: ${rem(368.08)};
  position: relative;
  left: 0;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`;

const TabletLineImg = styled.img`
  display: none;
  @media only screen and (min-width: ${breakpoints.laptop}) {
    display: block;
    height: 124%;
    width: 112.26px;
    transform: scaleX(-1) rotate(100deg);
    position: absolute;
    right: ${rem(150)};
    top: ${rem(60)};
  }
`;

export default function SliderSection() {
  return (
    <TopFlex>
      <StyledListingCard
        location="Atlanta, GA"
        year="2021"
        title="jungle oasis"
        href=""
        asCard
      />
      <Box width={[1, 1, 1, 3 / 5]}>
        <PlaceholderImg
          maxWidth={rem(734)}
          src="/images/header-placeholder.jpg"
        />
        {/* add slider */}
      </Box>
      <Box width={[1, 1, 1, 2 / 5]} pt={rem(8)} pb={rem(25)}>
        <TextContent>
          <Text as="h2" textAlign="right" variant="highlight" mb={rem(10)}>
            DECISIVELY DIFFERENT
          </Text>
          <Text
            as="h2"
            textAlign="right"
            variant={[
              'headingMobile',
              'headingMobile',
              'headingMobile',
              'heading',
            ]}
            mb={rem(40)}
          >
            luxury interiors
          </Text>
        </TextContent>
        <MobileLineImg src="/elements/goldlines/Gold-Line-6.png" />
        <TabletLineImg src="/elements/goldlines/Gold-Line-4.png" />
      </Box>
    </TopFlex>
  );
}
