import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styled, { css } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import { breakpoints } from 'styles/media';
import { ArrowLeft, ArrowRight } from 'components/common/slider/styles';
import { rem } from 'polished';
import BlogCard from 'components/common/blog-card';
import { mockBlogData } from 'pages/api/mocks';

const items = [
  {
    name: 'Team Member',
    src: '/images/team-1.png',
    title: 'Lead Designer',
    description: 'self-proclaimed maximalist',
  },
  {
    name: 'Team Member',
    src: '/images/team-2.png',
    title: 'Lead Designer',
    description: 'known for trying to bring the outdoors, in',
  },
  {
    name: 'Team Member',
    src: '/images/team-3.png',
    title: 'Lead Designer',
    description: 'self-proclaimed maximalist',
  },
];

const Container = styled.section`
  max-width: ${rem(1000)};
  margin: 0 auto;
  padding: ${rem(86)} ${rem(22)} ${rem(65)} ${rem(22)};

  .tablet-buttons {
    display: none;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: ${rem(105)} 0;
    .tablet-buttons {
      display: flex;
    }
  }
`;

const EmblaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${rem(15)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${rem(90)};
    flex-direction: row;
  }
`;

const EmblaParent = styled.div`
  overflow: visible;
`;

const StyledBlogCard = styled(BlogCard)`
  position: relative;
  flex: 0 0 100%;
  margin-bottom: ${rem(21)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-right: ${rem(24)};
    margin-bottom: 0;
    flex: 0 0 ${rem(522)};
  }
`;

const RelatedArticles = ({}: {}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <Container>
        <Text
          variant={['headingMobile', 'headingMobile', 'heading']}
          mb={[rem(27), rem(27), rem(32)]}
        >
          related articles
        </Text>
        <EmblaParent className="embla" ref={emblaRef}>
          <EmblaContainer className="embla__container">
            {mockBlogData.map((item) => (
              <StyledBlogCard
                className="embla__slide"
                key={item.src}
                {...item}
              />
            ))}
          </EmblaContainer>
        </EmblaParent>
        <Flex className="tablet-buttons" mt={[rem(25), rem(25), 'initial']}>
          <ArrowLeft onClick={scrollPrev} />
          <ArrowRight active className="embla__next" onClick={scrollNext} />
        </Flex>
      </Container>
    </>
  );
};

export default RelatedArticles;
RelatedArticles.displayName = 'RelatedArticles';
