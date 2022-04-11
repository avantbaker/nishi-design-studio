import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Box, Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import { queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import { ArrowLeft, ArrowRight } from 'components/common/slider/styles';
import { rem } from 'polished';
import { createSlideMap } from 'lib/utils';

import {
	FullWidthContainer,
	Container,
	EmblaParent,
	EmblaContainer,
	ImageWrap,
	StyledPagerList,
	TextContent,
	LineWrap,
	TabletLineImg,
	EmblaWrapper,
	RightBox,
} from './styles';

const HeroSlider = ({
	heroTitle: title,
	heroSubtitle: subtitle,
	caption,
	slides = [],
}) => {
	const [currentIndex, setSelectedIndex] = useState(0);
	const isTablet = useMediaQuery(queries.minTablet);

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

	const slideMap = createSlideMap(slides, currentIndex);

	return (
		<FullWidthContainer>
			<Container>
				<Box width={[1, 1, 1]}>
					<EmblaWrapper maxWidth={[null, null, '100%']} margin="0 auto">
						<EmblaParent className="embla" ref={emblaRef}>
							<EmblaContainer className="embla__container">
								{slides.map((slide, idx) => (
									<ImageWrap key={`${slide.image.uri}-${idx}`}>
										<Image src={`${slide.image.sourceUrl}`} layout="fill" />
									</ImageWrap>
								))}
							</EmblaContainer>
						</EmblaParent>
					</EmblaWrapper>
					{slideMap[currentIndex]}
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
								{caption}
							</Text>
							<StyledPagerList>
								{slides.map((slide, idx) => (
									<li
										key={`${slide.image.uri}-${idx}`}
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
								ml="auto"
							>
								<ArrowLeft onClick={scrollPrev} />
								<ArrowRight active className="embla__next" onClick={scrollNext} />
							</Flex>
						)}
					</Flex>
				</Box>
				<RightBox
					className="right-box"
					width={[1, 1, 'auto']}
					flexDirection="column"
					display="flex"
					mr={rem(60)}
				>
					<Flex flexDirection="column" ml="auto">
						<TextContent>
							<Text as="h2" textAlign="right" variant="highlight" mb={rem(10)}>
								{subtitle}
							</Text>
							<Text
								as="h2"
								textAlign="right"
								variant={['headingMobile', 'headingMobile', 'headingMobile', 'heading']}
								mb={[0, 0, rem(40)]}
							>
								{title}
							</Text>
						</TextContent>
						<LineWrap>
							<Image layout="fill" src="/elements/goldlines/gold-line-six.png" alt="" />
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
				</RightBox>
			</Container>
			<TabletLineImg src="/elements/goldlines/Gold-Line-4.png" />
		</FullWidthContainer>
	);
};

export default HeroSlider;
HeroSlider.displayName = 'HeroSlider';
