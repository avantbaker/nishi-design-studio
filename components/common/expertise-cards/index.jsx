import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import Link from 'next/link';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import { SecondaryButton } from 'components/common/button';
import { breakpoints } from 'styles/media';
import GoldBadge from 'components/common/badges/gold-badge';
import { GoldLineLeft, GoldLineRight } from 'pages/spaces/[slug]';

const FullWidthContainer = styled.section`
	position: relative;
	background-color: ${(props) =>
		props?.noBackground ? 'transparent' : `${theme.colors.lightTan}`};
`;

const Container = styled(Flex)`
	max-width: ${rem(1440)};
	margin: 0 auto;
	position: relative;
	padding: ${rem(100)} ${rem(20)} ${rem(100)};
	display: flex;
	flex-direction: column;
`;
const CardGoldBadge = styled(GoldBadge)`
	position: absolute;
	top: -80px;
	right: ${rem(140)};
`;
const Card = styled(Box)`
	background-color: ${({ type }) =>
		type === 'secondary' ? theme.colors.orange : theme.colors.green};
	padding: ${rem(20)};
	max-width: ${rem(490)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-right: ${rem(12)};
		margin-left: ${rem(12)};
	}

	&:first-of-type {
		margin-bottom: ${rem(24)};
		@media only screen and (min-width: ${breakpoints.tablet}) {
			margin-bottom: 0;
		}
	}
`;

const Caption = styled(Text)`
	text-transform: uppercase;
	color: white;
`;

const Title = styled(Text)`
	color: white;
`;

const PageTitle = styled(Text)`
	font-weight: bold;
	text-transform: uppercase;
`;

const TitleContainer = styled(Flex)`
	max-width: ${rem(968)};
	margin: 0 auto;
`;

const ExpertiseCard = ({
	type = 'primary',
	title,
	titleLineOne,
	titleLineTwo,
	description,
	body,
	link,
}) => {
	return (
		<Card type={type} width={1}>
			<Caption variant="highlight" mt={[rem(28)]} mb={[rem(28)]}>
				{title}
			</Caption>
			<Box mb={[rem(74)]}>
				<Title variant={['headingSmallMobileCard', 'headingMobile']}>
					{titleLineOne}
				</Title>
				<Title variant={['headingSmallMobileCard', 'headingMobile']} ml={[rem(32)]}>
					{titleLineTwo}
				</Title>
			</Box>
			<Text variant={['cardSubtextMobile', 'cardSubtext']} mb={[rem(24)]}>
				{body}
			</Text>
			<Text variant={['cardBodyMobile', 'cardBody']} mb={[rem(80)]}>
				{description}
			</Text>
			<Link href={link.url || 'contact'}>
				<a>
					<SecondaryButton color={theme.colors.tan}>{link.title}</SecondaryButton>
				</a>
			</Link>
		</Card>
	);
};

const dummyData = [
	{
		type: 'secondary',
		caption: 'Ground Up',
		title1: 'construction',
		title2: '+ renovation',
		subtext: 'We are the liason between the architect + the builder.',
		body: 'We manage budget expectations and balance with aesthetics by providing realistic allocation of funds compared to deliverables.',
		link: 'contact',
	},
	{
		type: 'primary',
		caption: 'Full Scale',
		title1: 'furniture',
		title2: '+ styling',
		subtext: 'We put forth a transparent approach to interior design.',
		body: 'Our comprehensive budget breakdown spares no detail, just like the spaces we design. We include all facets of the project scope– down to materials, labor, shipping, and installation.',
		link: 'contact',
	},
];

function ExpertiseCards({ expertiseTitle, expertiseCards, hasLogo = true }) {
	return (
		<FullWidthContainer noBackground>
			<GoldLineLeft alt="Gold line" src="/images/blog-lines-left.png" />
			<GoldLineRight alt="Gold line" src="/images/blog-lines-right.png" />
			<Container>
				<Box
					width={[1]}
					display="flex"
					flexDirection={['column']}
					className="left-box"
					position="relative"
				>
					<TitleContainer flexDirection="column" width={['100%']}>
						<PageTitle variant="sectionCaption" mb={[rem(40)]}>
							{expertiseTitle}
						</PageTitle>
					</TitleContainer>
					<Flex
						flexDirection={['column', 'column', 'row']}
						justifyContent={['flex-start', 'flex-start', 'center']}
						alignItems={['center', 'center', 'unset']}
						width={['100%', '100%']}
					>
						{expertiseCards?.map((card, idx) => (
							<ExpertiseCard
								key={`expertise-card-${idx}`}
								type={idx === 0 ? 'primary' : 'secondary'}
								{...card}
							/>
						))}
					</Flex>
				</Box>
				{hasLogo && <CardGoldBadge />}
			</Container>
		</FullWidthContainer>
	);
}

export default ExpertiseCards;
