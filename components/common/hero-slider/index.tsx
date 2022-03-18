import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Box, Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import { queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import { ArrowLeft, ArrowRight } from 'components/common/slider/styles';
import { rem } from 'polished';
import { Categories } from 'pages/spaces';
import {
	FullWidthContainer,
	Container,
	EmblaParent,
	EmblaContainer,
	ImageWrap,
	StyledListingCard,
	StyledPagerList,
	TextPagerList,
	LineWrap,
	TabletLineImg,
} from './styles';
import { normalizePosts } from './utils';
import { createSlideMap } from 'lib/utils';

const HeroSlider = ({ handleCategoryClick, featuredPosts }) => {
	const [currentIndex, setSelectedIndex] = useState(0);
	const isTablet = useMediaQuery(queries.minTablet);
	const [currentPosts, setCurrentPosts] = useState(normalizePosts(featuredPosts));

	const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1 });
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
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

	const slideMap = createSlideMap(currentPosts, currentIndex);

	return (
		<FullWidthContainer>
			<Container>
				<Box width={[1, 1, 1 / 2]}>
					<Flex maxWidth={[null, null, rem(1103)]} margin="0 auto">
						<EmblaParent className="embla" ref={emblaRef}>
							<EmblaContainer className="embla__container">
								{currentPosts.map((slide, idx) => (
									<ImageWrap key={`${slide.imgSrc}-${idx}`}>
										<Image src="/images/spaces-slide-image.png" layout="fill" />
									</ImageWrap>
								))}
							</EmblaContainer>
						</EmblaParent>
					</Flex>
					{slideMap[currentIndex]}
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
								FEATURED {currentPosts[currentIndex]?.category}
							</Text>
							<StyledPagerList>
								{currentPosts.map((item, idx) => (
									<li
										key={`${item.imgSrc}-${idx}`}
										className={idx === currentIndex ? 'selected' : ''}
									>
										<a onClick={() => emblaApi.scrollTo(idx)}>{`0${idx + 1}`}</a>
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
								<ArrowRight active className="embla__next" onClick={scrollNext} />
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
								<a
									onClick={() => {
										emblaApi.scrollTo(0);
										handleCategoryClick();
									}}
								>
									ALL
								</a>
							</Text>
							<Text
								as="li"
								variant="highlight"
								pb={[rem(21)]}
								className={currentIndex === 1 ? 'selected' : ''}
							>
								<a
									onClick={() => {
										emblaApi.scrollTo(1);
										handleCategoryClick(Categories.residential);
									}}
								>
									RESIDENTIAL
								</a>
							</Text>
							<Text
								as="li"
								variant="highlight"
								pb={[rem(21)]}
								className={currentIndex === 2 ? 'selected' : ''}
							>
								<a
									onClick={() => {
										emblaApi.scrollTo(2);
										handleCategoryClick(Categories.commercial);
									}}
								>
									COMMERCIAL
								</a>
							</Text>
						</TextPagerList>
						<LineWrap>
							<Image layout="fill" src="/elements/goldlines/gold-line-six.png" alt="" />
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
