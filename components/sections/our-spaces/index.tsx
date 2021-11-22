import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import styled, { css } from 'styled-components';
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
    padding-right: ${rem(16)};
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-right: ${rem(40)};
    margin-bottom: 0;
    flex: 0 0 ${rem(522)};
  }
`;

const ImgWrap = styled.div`
  width: ${rem(130)};
  height: ${rem(168)};
  position: absolute;
  left: calc(50% - 65px);
  bottom: -${rem(75)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(274)};
    height: ${rem(393)};
    left: 0;
    padding-top: ${rem(13)};
    bottom: -${rem(220)};
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
          mb={[rem(27), rem(27), rem(32)]}
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
            <PagerList>
              {mockSpacesData.map((item, idx) => (
                <li
                  key={item.src}
                  className={idx === currentIndex ? 'selected' : ''}
                >
                  <a onClick={() => emblaApi.scrollTo(idx)}>{`0${idx + 1}`}</a>
                </li>
              ))}
            </PagerList>
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
        <ImgWrap>
          <Image
            alt="Nishi Logo"
            src="/images/signature-ochre.png"
            width="274px"
            height="353px"
          />
        </ImgWrap>
      </Container>
    </>
  );
};

export default OurSpacesSlider;
OurSpacesSlider.displayName = 'OurSpacesSlider';
