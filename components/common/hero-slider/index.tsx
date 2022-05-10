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
	EmblaParentSmall as EmblaParent,
	EmblaContainer,
	ImageWrapSmall as ImageWrap,
	StyledListingCard,
	StyledPagerList,
	TextPagerList,
	LineWrap,
	TabletLineImg,
} from './styles';
import { createSlideMap } from 'lib/utils';
import styled from 'styled-components';
import { normalizePosts } from './utils';

const SpecialText = styled(Text)`
	text-transform: uppercase;
`;

// Embla Parent
// - remove the width on the laptop media query
// Image Wrapper
// - Set a smaller explicit width on the laptop media querys

const HeroSlider = ({ handleCategoryClick, featuredPosts }) => {
	const categoryMap = {
		0: Categories.all,
		1: Categories.residential,
		2: Categories.commercial,
	};

	const [currentIndex, setSelectedIndex] = useState(0);
	const isTablet = useMediaQuery(queries.minTablet);
	const [currentPosts, setCurrentPosts] = useState(normalizePosts(featuredPosts));

	const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1 });
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(() => {
		emblaApi && emblaApi.scrollPrev();
	}, [emblaApi, currentIndex]);
	const scrollNext = useCallback(() => {
		emblaApi && emblaApi.scrollNext();
	}, [emblaApi]);
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
				<Box width={[1, 1, 1]}>
					<Flex maxWidth={[null, null, rem(1103)]} margin="0 auto">
						<EmblaParent className="embla" ref={emblaRef}>
							<EmblaContainer className="embla__container">
								{currentPosts.map((slide, idx) => {
									return (
										<ImageWrap key={`${slide.imgSrc}-${idx}`}>
											<Image
												quality="100"
												src={slide.imgSrc || slide.src}
												layout="fill"
											/>
										</ImageWrap>
									);
								})}
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
							maxWidth={rem(458)}
							flexGrow={1}
							justifyContent="space-between"
							alignItems="flex-end"
							mb={[rem(24), rem(24), null]}
						>
							<SpecialText
								maxWidth={rem(189)}
								variant={['highlightMobile', 'highlightMobile', 'highlight']}
								textTransform="uppercase"
							>
								FEATURED{' '}
								{currentPosts[currentIndex]?.category === 'Uncategorized'
									? 'Projects'
									: currentPosts[currentIndex]?.category}
							</SpecialText>
							<StyledPagerList>
								{currentPosts.map((item, idx) => (
									<li
										key={`${item.imgSrc}-${idx}`}
										className={idx === currentIndex ? 'selected' : ''}
									>
										<a
											onClick={() => {
												emblaApi.scrollTo(idx);
												handleCategoryClick(categoryMap[idx]);
											}}
										>{`0${idx + 1}`}</a>
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
							<Image
								quality="100"
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
