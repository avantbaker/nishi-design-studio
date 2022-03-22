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
	padding: ${rem(61)} ${rem(22)} ${rem(20)} ${rem(24)};

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
		padding: ${rem(83)} ${rem(130)} ${rem(83)} ${rem(184)};
		.heading {
			margin-left: -${rem(45)};
		}

		button {
			margin-left: ${rem(30)};
		}
	}

	@media only screen and (min-width: ${breakpoints.laptopLarge}) {
		padding-left: 0;
		padding-right: 0;
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
	const { pressRelease } = currentRelease?.pressRelease;
	const { pressContent, pressLink } = pressRelease;

	return (
		<FullWidthContainer>
			<Container>
				<Text
					width={[rem(230), rem(230), 'initial']}
					color="#fff"
					mb={[rem(32), rem(32), rem(46)]}
					variant="highlight"
				>
					{headline}
				</Text>
				<Flex mb={[rem(135), rem(135), rem(157)]}>
					<Marquee text={pressContent} />
				</Flex>
				<Flex flexDirection={['column', 'column', 'row']}>
					{releases.map(({ pressRelease }, idx) => {
						const { pressLogo } = pressRelease?.pressRelease;
						return (
							<div style={{ marginRight: rem(24), cursor: 'pointer' }} key={`img-${idx}`}>
								<Image
									onClick={() => setCurrentRelease(releases[idx])}
									alt="Nishi"
									width="200px"
									height="50px"
									src={pressLogo?.sourceUrl || '/images/press-image.png'}
								/>
							</div>
						);
					})}
					<Link href={pressLink?.url || ''}>
						<a>
							<SecondaryButton color="#fff">Read Article</SecondaryButton>
						</a>
					</Link>
				</Flex>
			</Container>
		</FullWidthContainer>
	);
}
