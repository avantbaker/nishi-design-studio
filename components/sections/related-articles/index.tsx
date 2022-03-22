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

const Container = styled.section`
	max-width: ${rem(1000)};
	width: 100%;
	margin: 0 auto;
	padding-top: ${rem(86)};

	.tablet-buttons {
		display: none;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-top: ${rem(105)};
		.tablet-buttons {
			display: flex;
			justify-content: flex-end;
		}
	}
`;

const EmblaContainer = styled.div`
	display: flex;
	flex-direction: column;

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

const RelatedArticles = ({ articles = [] }) => {
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
						{articles?.map((item) => (
							<StyledBlogCard className="embla__slide" key={item.src} {...item} />
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
