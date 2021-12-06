import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ListingCard from 'components/common/listing-card';
import Image from 'next/image';
import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import theme from 'styles/theme';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import { ArrowLeft, ArrowRight } from 'components/common/slider/styles';
import { rem } from 'polished';
import { PagerList } from 'components/common/slider/styles';

const FullWidthContainer = styled.section`
  position: relative;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;
  padding: ${rem(4)} 0 ${rem(65)} 0;
  max-width: ${rem(1106)};
  margin: 0 auto;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    padding: ${rem(86)} ${rem(24)} ${rem(65)} ${rem(24)};
  }
`;

const EmblaContainer = styled.div`
  display: flex;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${rem(31)};
    flex-direction: row;
  }
`;

const EmblaParent = styled.div`
  overflow: hidden;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(458)};
  }
`;

const StyledPagerList = styled(PagerList)`
  flex-grow: 1;
  max-width: ${rem(230)};
  justify-content: right;
  li {
    color: ${theme.colors.gray};

    a {
      padding: 0 ${rem(16)} ${rem(14)} ${rem(16)};

      :last-child {
        padding-right: 0;
      }
    }

    &.selected {
      text-shadow: ${rem(0)} ${rem(0)} ${rem(1)} ${theme.colors.gray};
    }
  }

  :after {
    left: 0;
    width: 77%;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  min-width: 100vw;
  height: ${rem(205)};

  img {
    object-fit: cover;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    min-width: ${rem(458)};
    height: ${rem(510)};
  }
`;

const TextPagerList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: fit-content;
  align-self: flex-end;
  text-align: right;

  a {
    cursor: pointer;
    padding-bottom: ${rem(31)};
    padding-right: ${rem(18)};
    position: relative;
    width: 100%;
  }

  li {
    font-weight: normal;
  }

  li.selected {
    text-shadow: ${rem(0)} ${rem(0)} ${rem(1)} ${theme.colors.gray};

    :after {
      content: '';
      position: absolute;
      display: block;
      background-color: ${theme.colors.sand};
      height: 1px;
      width: 17%;
      right: 0;
      margin-top: ${rem(8)};
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
      a:before {
        content: '';
        width: ${rem(34)};
        height: ${rem(34)};
        display: block;
        border: 1px solid ${theme.colors.orange};
        border-radius: 50%;
        left: -${rem(20)};
        top: -${rem(10)};
        position: absolute;
      }

      :after {
        width: 35%;
      }
    }
  }
`;

const TabletLineImg = styled.img`
  display: none;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
    width: 50%;
    z-index: -1;
    position: absolute;
    right: -${rem(10)};
    top: 43%;
    transform: rotate(-5deg);
  }
`;

const LineWrap = styled.div`
  position: relative;
  height: ${rem(145)};
  width: 100vw;
  margin-bottom: ${rem(12)};

  img {
    object-fit: contain;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: 40%;
    position: absolute;
    height: ${rem(275)};
    left: -6%;
    top: ${rem(245)};
    z-index: -1;
    img {
      object-fit: contain;
    }
  }
`;

const GoldLineSix = styled.img``;

const StyledListingCard = styled(ListingCard)`
  margin-bottom: ${rem(32)};
  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
    position: absolute;
    left: 50%;
    bottom: ${rem(84)};
    transform: translate(-50%, -50%);
  }
`;

const HeroSlider = () => {
  const [currentIndex, setSelectedIndex] = useState(0);
  const isTablet = useMediaQuery(queries.minTablet);

  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1 });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // @ts-ignore -- array
  const mockArray = [...Array(3).keys()];

  return (
    <FullWidthContainer>
      <Container>
        <Box width={[1, 1, 1 / 2]}>
          <Flex maxWidth={[null, null, rem(1103)]} margin="0 auto">
            <EmblaParent className="embla" ref={emblaRef}>
              <EmblaContainer className="embla__container">
                {mockArray.map((slide, idx) => (
                  <ImageWrap key={`${slide.src}-${idx}`}>
                    <Image src="/images/spaces-slide-image.png" layout="fill" />
                  </ImageWrap>
                ))}
              </EmblaContainer>
            </EmblaParent>
          </Flex>
          {currentIndex === 0 && (
            <StyledListingCard
              location="New York, NY"
              year="2021"
              title="elemental villa"
              href=""
              asCard
              selected={currentIndex === 0}
            />
          )}
          {currentIndex === 1 && (
            <StyledListingCard
              location="Atlanta, GA"
              year="2021"
              title="jungle oasis"
              href=""
              asCard
              selected={currentIndex === 1}
            />
          )}
          {currentIndex === 2 && (
            <StyledListingCard
              location="New York, NY"
              year="2021"
              title="urban retreat"
              href=""
              asCard
              selected={currentIndex === 2}
            />
          )}
          <Flex
            justifyContent={['flex-end', 'flex-end', 'space-between']}
            alignItems={['initial', 'initial', 'center']}
            flexDirection={['column', 'column', 'row']}
            flexWrap="wrap"
            width={['fit-content', 'auto', 'auto']}
            margin="0 auto"
            pl={[rem(24), rem(24), 0]}
            pr={[rem(14), rem(14), 0]}
          >
            <Flex
              // width={[, 'initial']}
              maxWidth={rem(458)}
              flexGrow={1}
              justifyContent="space-between"
              alignItems="flex-end"
              mb={[rem(24), rem(24), null]}
            >
              <Text
                maxWidth={rem(189)}
                variant={['highlightMobile', 'highlightMobile', 'highlight']}
              >
                FEATURED RESIDENTIAL
              </Text>
              <StyledPagerList>
                {mockArray.map((item, idx) => (
                  <li
                    key={`${item.src}-${idx}`}
                    className={idx === currentIndex ? 'selected' : ''}
                  >
                    <a onClick={() => emblaApi.scrollTo(idx)}>{`0${
                      idx + 1
                    }`}</a>
                  </li>
                ))}
              </StyledPagerList>
            </Flex>
            {!isTablet && (
              <Flex
                justifyContent={['flex-end', 'flex-end', 'initial']}
                mt="auto"
                mb={0}
                ml="auto"
              >
                <ArrowLeft onClick={scrollPrev} />
                <ArrowRight
                  active
                  className="embla__next"
                  onClick={scrollNext}
                />
              </Flex>
            )}
          </Flex>
        </Box>
        <Box
          className="right-box"
          width={[1, 1, 1 / 2]}
          flexDirection="column"
          display="flex"
        >
          <Flex flexDirection="column" ml="auto">
            <TextPagerList>
              <Text
                as="li"
                variant="highlight"
                pb={[rem(21)]}
                className={currentIndex === 0 ? 'selected' : ''}
              >
                <a onClick={() => emblaApi.scrollTo(0)}>ALL</a>
              </Text>
              <Text
                as="li"
                variant="highlight"
                pb={[rem(21)]}
                className={currentIndex === 1 ? 'selected' : ''}
              >
                <a onClick={() => emblaApi.scrollTo(1)}>RESIDENTIAL</a>
              </Text>
              <Text
                as="li"
                variant="highlight"
                pb={[rem(21)]}
                className={currentIndex === 2 ? 'selected' : ''}
              >
                <a onClick={() => emblaApi.scrollTo(2)}>COMMERCIAL</a>
              </Text>
            </TextPagerList>
            <LineWrap>
              <Image
                layout="fill"
                src="/elements/goldlines/gold-line-six.png"
                alt=""
              />
            </LineWrap>
          </Flex>
          {isTablet && (
            <Flex
              justifyContent={['flex-end', 'flex-end', 'initial']}
              mt="auto"
              mb={0}
              ml="auto"
            >
              <ArrowLeft onClick={scrollPrev} />
              <ArrowRight active className="embla__next" onClick={scrollNext} />
            </Flex>
          )}
        </Box>
      </Container>
      <TabletLineImg src="/elements/goldlines/Gold-Line-4.png" />
    </FullWidthContainer>
  );
};

export default HeroSlider;
HeroSlider.displayName = 'HeroSlider';
