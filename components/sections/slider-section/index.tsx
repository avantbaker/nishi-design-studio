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
  max-width: ${rem(1440)};
  margin: 0 auto;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    padding: ${rem(86)} 0 ${rem(65)} 0;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${rem(25)};
  margin-left: auto;

  max-width: ${rem(226)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    max-width: ${rem(400)};
    padding: 0 ${rem(20)} 0 ${rem(16)};
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
    width: ${rem(734)};
  }
`;

const StyledPagerList = styled(PagerList)`
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

  @media only screen and (min-width: ${breakpoints.tablet}) {
    min-width: ${rem(230)};
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
    min-width: ${rem(734)};
    height: ${rem(582)};
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
    top: 50%;
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
                    <Image src="/images/header-placeholder.jpg" layout="fill" />
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
            margin="0 auto"
            pl={[rem(24), rem(24), 0]}
            pr={[rem(14), rem(14), 0]}
          >
            <Flex
              flexGrow={1}
              justifyContent="space-between"
              mb={[rem(24), rem(24), null]}
              pl={[0, 0, rem(24)]}
            >
              <Text
                flexGrow={1}
                textAlign="center"
                variant={['highlightMobile', 'highlightMobile', 'highlight']}
              >
                FEATURED
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
                mb={[0, 0, rem(40)]}
              >
                luxury interiors
              </Text>
            </TextContent>
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
              mb={rem(24)}
              mr={rem(20)}
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
