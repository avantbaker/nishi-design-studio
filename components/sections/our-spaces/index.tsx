import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import { SecondaryButton } from 'components/common/button';
import SpaceCard from 'components/common/space-card';
import { breakpoints } from 'styles/media';
import { ArrowLeft, ArrowRight } from 'components/common/slider/styles';
import { rem } from 'polished';
import { PagerList } from 'components/common/slider/styles';
import { mockSpacesData } from 'pages/api/mocks';

const Container = styled.section`
  position: relative;
  max-width: ${rem(1000)};
  margin: 0 auto;
  padding: ${rem(86)} ${rem(22)} ${rem(105)} ${rem(22)};

  .tablet-buttons {
    display: none;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: ${rem(105)} 0 ${rem(205)} ${rem(28)};
    .tablet-buttons {
      display: flex;
    }
  }
`;

const EmblaContainer = styled.div`
  display: flex;
  margin-bottom: ${rem(15)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${rem(90)};
    flex-direction: row;
  }
`;

const EmblaParent = styled.div`
  overflow: visible;
`;

const StyledSpaceCard = styled(SpaceCard)`
  position: relative;
  flex: 0 0 70%;
  margin-bottom: ${rem(21)};
  margin-right: ${rem(33)};

  .right-box {
    position: relative;
    padding-right: ${rem(16)};
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-right: ${rem(40)};
    margin-bottom: 0;
    flex: 0 0 ${rem(522)};
  }
`;

const StyledPagerList = styled(PagerList)`
  width: ${rem(230)};
  li {
    :first-child a {
      padding-left: 0;
    }
    a {
      padding: 0 ${rem(16)} ${rem(14)} ${rem(16)};

      :last-child {
        padding-right: 0;
      }
    }
  }

  :after {
    left: 0;
    width: 77%;
  }
`;

const OurSpacesSlider = ({}: {}) => {
  const [currentIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <Container>
        <Text
          variant={['headingMobile', 'headingMobile', 'heading']}
          mb={[rem(27), rem(27), rem(57)]}
        >
          our spaces
        </Text>
        <EmblaParent className="embla" ref={emblaRef}>
          <EmblaContainer className="embla__container">
            {mockSpacesData.map((space) => (
              <StyledSpaceCard key={space.title} {...space} />
            ))}
          </EmblaContainer>
        </EmblaParent>
        <Flex
          justifyContent={['initial', 'initial', 'space-between']}
          alignItems={['initial', 'initial', 'center']}
          flexDirection={['column-reverse', 'column-reverse', 'row']}
          width={['fit-content', 'auto', 'auto']}
        >
          <Flex flexDirection="column">
            <StyledPagerList>
              {mockSpacesData.map((item, idx) => (
                <li
                  key={item.src}
                  className={idx === currentIndex ? 'selected' : ''}
                >
                  <a onClick={() => emblaApi.scrollTo(idx)}>{`0${idx + 1}`}</a>
                </li>
              ))}
            </StyledPagerList>
            <Link href="/spaces" passHref>
              <a>
                <SecondaryButton>explore all spaces</SecondaryButton>
              </a>
            </Link>
          </Flex>
          <Flex
            justifyContent={['flex-end', 'flex-end', 'initial']}
            mt={[rem(25), rem(25), 'initial']}
            mb={rem(24)}
            mr={[null, null, rem(24)]}
          >
            <ArrowLeft onClick={scrollPrev} />
            <ArrowRight active className="embla__next" onClick={scrollNext} />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default OurSpacesSlider;
OurSpacesSlider.displayName = 'OurSpacesSlider';
