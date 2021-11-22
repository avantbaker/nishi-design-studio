import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styled, { css } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import theme from 'styles/theme';
import DarkCard from 'components/common/dark-slider/dark-card';
import { breakpoints } from 'styles/media';
import { ArrowLeft, ArrowRight } from 'components/common/slider/styles';
import { rem } from 'polished';
import { PagerList } from 'components/common/slider/styles';
import { mockDarkSliderData } from 'pages/api/mocks';

const Container = styled.section`
  background-color: ${theme.colors.brown};
  padding: ${rem(86)} ${rem(24)} ${rem(65)} ${rem(24)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: ${rem(105)} ${rem(24)};
  }
`;

const EmblaContainer = styled.div`
  display: flex;
  margin-bottom: ${rem(15)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${rem(31)};
    flex-direction: row;
  }
`;

const EmblaParent = styled.div`
  overflow: visible;
`;

const StyledDarkCard = styled(DarkCard)`
  margin-right: ${rem(20)};
  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-right: ${rem(115)};
  }
`;

const StyledPagerList = styled(PagerList)`
  li {
    color: ${theme.colors.tan};

    &.selected {
      text-shadow: ${rem(0)} ${rem(0)} ${rem(1)} ${theme.colors.tan};
    }
  }
`;

const DarkSlider = () => {
  const [currentIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    skipSnaps: false,
  });
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

  return (
    <>
      <Container>
        <Flex
          flexDirection={['column', 'column', 'row']}
          justifyContent="space-between"
          alignItems="center"
          mb={[rem(70), rem(70), rem(60)]}
          maxWidth={[null, null, rem(890)]}
          px={[rem(20), rem(20), 'initial']}
          ml="auto"
          mr="auto"
        >
          <Text
            css={{ whiteSpace: 'nowrap' }}
            variant="highlight"
            color={theme.colors.tan}
            mr={rem(24)}
            mb={[rem(30)]}
          >
            OUR PROCESS
          </Text>
          <Text
            textAlign={['center', 'center', 'initial']}
            maxWidth={rem(709)}
            variant="body"
            color={theme.colors.tan}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus semper odio eunum.
          </Text>
        </Flex>
        <EmblaParent className="embla" ref={emblaRef}>
          <EmblaContainer className="embla__container">
            {mockDarkSliderData.map((slide, idx) => (
              <StyledDarkCard key={slide.src} {...slide} />
            ))}
          </EmblaContainer>
        </EmblaParent>
        <Flex
          justifyContent={['flex-end', 'flex-end', 'space-between']}
          alignItems={['initial', 'initial', 'center']}
          flexDirection={['column-reverse', 'column-reverse', 'row']}
          width={['fit-content', 'auto', 'auto']}
          maxWidth={[rem(242), rem(242), rem(890)]}
          margin="0 auto"
        >
          <Flex
            justifyContent={['flex-end', 'flex-end', 'initial']}
            mt={[rem(25), rem(25), 'initial']}
            mb={rem(24)}
          >
            <ArrowLeft onClick={scrollPrev} />
            <ArrowRight active className="embla__next" onClick={scrollNext} />
          </Flex>
          <Flex
            width={['fit-content', 'fit-content', 'initial']}
            flexDirection="column"
            ml="auto"
          >
            <StyledPagerList>
              {mockDarkSliderData.map((item, idx) => (
                <li
                  key={item.src}
                  className={idx === currentIndex ? 'selected' : ''}
                >
                  <a onClick={() => emblaApi.scrollTo(idx)}>{`0${idx + 1}`}</a>
                </li>
              ))}
            </StyledPagerList>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default DarkSlider;
DarkSlider.displayName = 'DarkSlider';
