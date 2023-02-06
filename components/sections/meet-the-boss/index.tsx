import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import styled from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import { breakpoints } from 'styles/media';
import { rem, rgba } from 'polished';
import OrangeBadge from 'components/common/badges/orange-badge';

const Container = styled(Flex)`
	position: relative;
`;

const HeadingText = styled(Text)`
	text-indent: -${rem(30)};
	margin-left: ${rem(30)};
	width: 50%;
	color: ${theme.colors.white};
`;

const ImageWrap = styled.div`
	padding: 0 ${rem(28)};
	position: relative;
	width: ${rem(265)};
	height: ${rem(319)};
	top: ${rem(96)};
	left: 50%;
	transform: translate(-50%, -50%);

	@media only screen and (min-width: ${breakpoints.laptop}) {
		width: ${rem(393)};
		height: ${rem(472.49)};
		position: absolute;
		top: 50%;
		left: 50%;
	}
`;

const TextContentLeft = styled.div`
	max-width: ${rem(450)};
	margin: 0 auto;
	@media only screen and (min-width: ${breakpoints.laptop}) {
		margin-left: auto;
		margin-right: 0;
		width: ${rem(430)};
		z-index: 1;
	}
`;

const TextContentRight = styled.div`
	max-width: ${rem(450)};
	margin: 0 auto;
	@media only screen and (min-width: ${breakpoints.laptop}) {
		margin-left: 40%;
		width: ${rem(275)};
	}
`;

const StyledOrangeBadge = styled(OrangeBadge)`
	position: relative;
	width: ${rem(97)};
	height: ${rem(97)};
	margin: 0 auto;
	bottom: ${rem(50)};

	@media only screen and (min-width: ${breakpoints.laptop}) {
		margin-left: auto;
		margin-right: -${rem(40)};
		bottom: ${rem(55)};
	}
`;

export default function MeetTheBoss({
	imgOverlayContentCaption: contentCaption = 'LOREM IPSUM',
	imgOverlayContentDescription:
		contentDescription = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta.</p>\n',
	imgOverlayImage: img = {
		sourceUrl:
			'https://live-nishi-design-studio.pantheonsite.io/wp-content/uploads/2022/03/nishi-profile.png',
	},
	imgOverlayLineOne: line1 = 'nishi',
	imgOverlayLineTwo: line2 = 'donovan',
	imgOverlaySubtitle: subtitle = 'MEET THE BOSS',
}) {
	return (
		<Container flexDirection={['column', 'column', 'column', 'row']}>
			<Box
				backgroundColor={rgba(215, 139, 50, 0.75)}
				width={[1, 1, 1, 1 / 2]}
				pt={[rem(80), rem(80), rem(80), rem(223)]}
				pb={[rem(70), rem(70), rem(70), rem(200)]}
				pl={[rem(28), rem(28), rem(28), 'initial']}
				pr={rem(28)}
				display="flex"
				flexDirection="column"
				alignItems={['initial', 'initial', 'center']}
				textAlign="left"
			>
				<TextContentLeft>
					<Text variant="highlight" mb={[rem(13), rem(13)]} color={theme.colors.white}>
						{subtitle}
					</Text>
					<HeadingText
						mb={[rem(46), rem(46)]}
						fontSize={[rem(45), rem(45), rem(80)]}
						variant={['headingMobile', 'headingMobile', 'heading']}
					>
						{line1} {line2}
					</HeadingText>
				</TextContentLeft>
			</Box>
			<ImageWrap>
				<Image
					quality="100"
					alt="Nishi Donovan"
					src={img.sourceUrl || '/images/nishi-profile.png'}
					layout="responsive"
					width="786px"
					height="948px"
				/>
				<StyledOrangeBadge />
			</ImageWrap>
			<Box
				width={[1, 1, 1, 1 / 2]}
				pt={[0, 0, 0, rem(223)]}
				pb={[rem(70), rem(70), rem(70), rem(200)]}
				pl={rem(28)}
				pr={[rem(28), rem(28), rem(28), 'initial']}
				display="flex"
				flexDirection="column"
				alignItems={['center', 'initial', 'initial']}
			>
				<TextContentRight>
					<Text mb={[rem(15), rem(15)]} variant="highlight" color={theme.colors.gray}>
						{contentCaption}
					</Text>
					<Text
						mb={[rem(26), rem(26)]}
						variant="body"
						color={theme.colors.textGray}
						dangerouslySetInnerHTML={{ __html: contentDescription }}
					/>
				</TextContentRight>
			</Box>
		</Container>
	);
}
