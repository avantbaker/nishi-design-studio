import React, { useState } from 'react';
import Text from 'components/common/text';
import styled, { css } from 'styled-components';
import ListingCard from 'components/common/listing-card';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import HeaderSlider from 'components/common/header-slider';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${rem(25)};
  margin-left: auto;
  padding: 0 ${rem(20)} 0 ${rem(16)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    max-width: ${rem(400)};
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    max-width: ${rem(400)};
  }
`;

const Container = styled(Flex)`
  flex-wrap: wrap-reverse;
  position: relative;

  .right-box {
    position: relative;
  }
`;

const StyledListingCard = styled(ListingCard)`
  width: 100%;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    position: absolute;
    left: 45%;
    bottom: 35%;
    z-index: 1;
    width: auto;
    max-width: ${rem(350)};
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    left: 40%;
    bottom: 30%;
  }
`;

const MobileLineImg = styled.img`
  transform: scaleY(1) scaleX(-1);
  height: ${rem(75.78)};
  position: relative;
  left: 0;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const TabletLineImg = styled.img`
  display: none;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
    width: ${rem(150)};
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%) scaleX(-1) rotate(100deg);
  }
`;

const ArrowRight = styled.div`
  background-image: url('/images/enabled-left-arrow.png');
  background-size: cover;
  width: ${rem(35)};
  height: ${rem(35)};
  transform: rotate(180deg);
  margin-left: ${rem(11)};
  cursor: pointer;
  position: relative;

  :hover {
    color: initial;
    outline: none;
    background-image: url('/images/enabled-left-arrow.png');
    transform: rotate(180deg);
  }

  ${({ active }) =>
    active &&
    css`
      background-image: url('/images/active-right-arrow.png');
      background-size: cover;
      border-radius: 50%;
      transform: initial;

      :hover {
        color: initial;
        outline: none;
        background-image: url('/images/active-right-arrow.png');
        transform: initial;
      }
    `}
  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(69)};
    height: ${rem(69)};

    :after {
      content: '';
      display: block;
      border-radius: 50%;
      border: ${rem(1)} solid #d78b32;
      width: ${rem(34)};
      height: ${rem(34)};
      position: absolute;
      right: -${rem(6)};
      bottom: -${rem(6)};
    }
  }
`;

const ArrowLeft = styled.div`
  width: ${rem(35)};
  height: ${rem(35)};
  background-image: url('/images/enabled-left-arrow.png');
  background-size: cover;
  cursor: pointer;

  :hover {
    color: initial;
    outline: none;
    background-image: url('/images/enabled-left-arrow.png');
  }

  ${({ active }) =>
    active &&
    css`
      background-image: url('/images/active-right-arrow.png');
      background-size: cover;
      border-radius: 50%;
      transform: rotate(180deg);

      :hover {
        color: initial;
        outline: none;
        background-image: url('/images/active-right-arrow.png');
        border-radius: 50%;
        transform: rotate(180deg);
      }
    `}

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(69)};
    height: ${rem(69)};
  }
`;

const SliderButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-right: 10%;
  }
`;

const FeaturedText = styled.div`
  font-size: ${rem(10)};
  line-height: ${rem(11)};
  letter-spacing: ${rem(6.24)};
  color: ${theme.colors.gray};
  font-family: ${theme.typography.fonts.secondary};
  font-weight: bold;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    font-size: ${rem(13)};
    line-height: ${rem(15)};
  }
`;

const PagerWrap = styled.div`
  padding: ${rem(32)} ${rem(14)} ${rem(49)} ${rem(24)};
  width: 100%;

  ul {
    display: flex;
    position: relative;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-bottom: ${rem(0.6)} solid ${theme.colors.sand};

    :after {
      content: '';
      position: absolute;
      bottom: 0;
      display: block;
      height: ${rem(0.6)};
      width: ${rem(50.31)};
      background-color: ${theme.colors.orange};
    }

    li {
      font-size: ${rem(8.45)};
      line-height: ${rem(10)};
      font-family: ${theme.typography.fonts.secondary};
      letter-spacing: ${rem(5.28)};
      text-align: right;
      color: ${theme.colors.gray};
      overflow: auto;

      a {
        padding: 0 ${rem(4)} ${rem(9)} ${rem(4)};
        cursor: pointer;
        display: block;
      }

      &.selected {
        text-shadow: ${rem(0)} ${rem(0)} ${rem(1)} ${theme.colors.gray};
      }

      @media only screen and (min-width: ${breakpoints.tablet}) {
        font-size: ${rem(11)};
        line-height: ${rem(13)};

        a {
          padding-bottom: ${rem(16)};
        }
      }
    }
  }
`;

export default function SliderSection() {
  const sliderRef = React.useRef(null);
  const [activeArrow, setActiveArrow] = useState('right');
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderItems = [1, 2, 3, 4, 5, 6];

  function handleSliderChange(str) {
    if (str === 'left') {
      sliderRef.current.slickPrev();
    }
    sliderRef.current.slickNext();
  }

  function handleBeforeChange(prev, next) {
    setActiveIndex(next);
  }

  function handleIndexChange(idx) {
    sliderRef.current.slickGoTo(idx);
    setActiveIndex(idx);
  }

  return (
    <Container>
      <PagerWrap>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mb={[rem(24), rem(24)]}
          width={['auto', 'auto', '50%']}
        >
          <FeaturedText>FEATURED</FeaturedText>
          <ul>
            {sliderItems.map((item, idx) => (
              <li key={item} className={activeIndex === idx ? 'selected' : ''}>
                <a onClick={() => handleIndexChange(idx)}>{`0${idx + 1}`}</a>
              </li>
            ))}
          </ul>
        </Flex>
        <SliderButtons>
          <ArrowLeft
            active={activeArrow === 'left'}
            onClick={() => handleSliderChange('left')}
          />
          <ArrowRight
            active={activeArrow === 'right'}
            onClick={() => handleSliderChange('right')}
          />
        </SliderButtons>
      </PagerWrap>
      <StyledListingCard
        location="Atlanta, GA"
        year="2021"
        title="jungle oasis"
        href=""
        asCard
      />
      <Box width={[1, 1, 3 / 5, 3 / 5]}>
        <HeaderSlider
          beforeChange={handleBeforeChange}
          ref={sliderRef}
          items={sliderItems}
        />
      </Box>
      <Box
        className="right-box"
        width={[1, 1, 2 / 5, 2 / 5]}
        pt={rem(8)}
        pb={rem(25)}
      >
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
    </Container>
  );
}
