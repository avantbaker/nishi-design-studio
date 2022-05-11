import styled from 'styled-components';
import Link from 'next/link';
import theme from 'styles/theme';
import Image from 'next/image';
import Marquee from 'components/common/marquee';
import { Flex } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import { SecondaryButton } from 'components/common/button';
import { breakpoints } from 'styles/media';
import { useState } from 'react';

const FullWidthContainer = styled.section`
	background-color: ${theme.colors.lightOrange};
	overflow-x: hidden;
`;

const Container = styled.div`
	max-width: ${rem(1440)};
	margin: 0 auto;
	padding: ${rem(61)} ${rem(22)} ${rem(40)} ${rem(24)};
	min-height: ${rem(350)};
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	.heading {
		white-space: nowrap;
		font-family: ${theme.typography.fonts.primary};
		font-weight: bold;
	}

	a {
		margin-left: auto;
		margin-right: 0;
		margin-top: auto;
		margin-bottom: auto;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding: ${rem(83)} ${rem(34)} ${rem(83)} ${rem(34)};
		.heading {
			margin-left: -${rem(45)};
		}

		button {
			margin-left: ${rem(30)};
		}
	}
`;

const CustomImageContainer = styled.div`
	margin-right: ${rem(20)};
	cursor: 'pointer';
	background-image: url(${({ src }) => src});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	height: 70px;
	width: 33.333%;
	max-width: ${rem(170)};
	opacity: ${({ active }) => (active ? '1' : '.25')};

	> div {
		position: unset !important;
	}

	&:hover {
		opacity: 1;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-right: ${rem(36)};
	}

	&:last-child {
		margin-right: 0;
	}
`;
export default function MediaSection({
	headline,
	pressReleases: releases = [],
	scrollingText: testimonial,
	testimonialLinkTitle: linkText,
	testimonialLinkUrl: linkUrl,
	brandsImage: img,
}) {
	const [currentRelease, setCurrentRelease] = useState(releases[0]);
	const [active, setActive] = useState(0);
	const { pressRelease } = currentRelease?.pressRelease;
	const { pressContent, pressLink } = pressRelease;

	return (
		<FullWidthContainer>
			<Container>
				<Text
					width={[rem(230), rem(230), 'initial']}
					color="#fff"
					mb={[rem(100)]}
					variant="highlight"
				>
					{headline}
				</Text>
				<Flex mb={[rem(135), rem(135), rem(157)]}>
					<Marquee text={pressContent} />
				</Flex>
				<Flex flexDirection={['column', 'column', 'row']}>
					<Flex
						width="100%"
						mw={[rem(600)]}
						flexDirection={['row']}
						mb={[rem(12), 0, 0]}
						mt={rem(24)}
					>
						{releases.map(({ pressRelease }, idx) => {
							const { pressLogo } = pressRelease?.pressRelease;
							return (
								<CustomImageContainer
									onClick={() => {
										setCurrentRelease(releases[idx]);
										setActive(idx);
									}}
									src={pressLogo?.sourceUrl || '/images/press-image.png'}
									active={!!(active === idx)}
									key={`img-${idx}`}
								/>
							);
						})}
					</Flex>
					<Link href={'press'}>
						<a>
							<SecondaryButton color="#fff">all press</SecondaryButton>
						</a>
					</Link>
				</Flex>
			</Container>
		</FullWidthContainer>
	);
}
