import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styled, { css } from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import { breakpoints } from 'styles/media';
import { ArrowLeft, ArrowRight } from 'components/common/slider/styles';
import TeamCard from 'components/common/team-card';
import { PagerList } from 'components/common/slider/styles';
import { rem } from 'polished';

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
	padding: 0 0 ${rem(65)} ${rem(27)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding: ${rem(105)} 0;
	}
`;

const EmblaContainer = styled.div`
	display: flex;
	margin-bottom: ${rem(15)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-bottom: ${rem(90)};
	}
`;

const EmblaParent = styled.div`
	overflow: visible;
	padding-left: ${rem(43)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-left: 0;
	}
`;

const StyledTeamCard = styled(TeamCard)`
	position: relative;
	flex: 0 0 ${rem(187)};
	margin-right: ${rem(33)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-right: ${rem(117)};
		flex: 0 0 ${rem(249)};
	}
`;

const TeamSlider = ({ teamSectionTitle: title, images = [] }) => {
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
				<Text variant="highlight" mb={[rem(60), rem(60), rem(60)]}>
					{title || 'MEET THE TEAM'}
				</Text>
				<EmblaParent className="embla" ref={emblaRef}>
					<EmblaContainer className="embla__container">
						{images.map(({ teamMemberInfo, title }) => (
							<StyledTeamCard
								className="embla__slide"
								key={teamMemberInfo.src}
								{...teamMemberInfo}
								title={title}
							/>
						))}
					</EmblaContainer>
				</EmblaParent>
				<Flex
					justifyContent={['initial', 'initial', 'space-between']}
					alignItems={['initial', 'initial', 'center']}
					flexDirection={['columm', 'column', 'row']}
					width={['fit-content', 'auto', 'auto']}
				>
					<PagerList>
						{images.map(({ teamMemberInfo }, idx) => (
							<li
								key={teamMemberInfo.title}
								className={idx === currentIndex ? 'selected' : ''}
							>
								<a onClick={() => emblaApi.scrollTo(idx)}>{`0${idx + 1}`}</a>
							</li>
						))}
					</PagerList>
					<Flex mt={[rem(25), rem(25), 'initial']}>
						<ArrowLeft onClick={scrollPrev} />
						<ArrowRight active className="embla__next" onClick={scrollNext} />
					</Flex>
				</Flex>
			</Container>
		</>
	);
};

export default TeamSlider;
TeamSlider.displayName = 'TeamSlider';
