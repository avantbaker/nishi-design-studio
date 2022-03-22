import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';

const Container = styled.section`
	position: relative;

	.left-box {
		position: relative;
		height: ${rem(361)};

		img {
			object-fit: cover;
		}
		@media only screen and (min-width: ${breakpoints.tablet}) {
			height: ${rem(630)};
		}
	}

	.header-text {
		text-indent: -${rem(50)};
		margin-left: ${rem(50)};

		@media only screen and (min-width: ${breakpoints.tablet}) {
			text-indent: -${rem(120)};
			margin-left: ${rem(62)};
		}
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		.left-box {
			z-index: 2;
		}
		.right-box {
			position: relative;
			z-index: 1;
		}
	}
`;

const TextContentRight = styled.div`
	width: ${rem(200)};
	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: ${rem(350)};
		margin: 0 auto;
	}
`;

const LineWrap = styled.div`
	position: absolute;
	pointer-events: none;
	top: 7%;
	right: -${rem(25)};
	width: 60%;
	height: 246px;
	z-index: 0;

	img {
		object-fit: contain;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		transform: rotate(-15deg);
	}

	@media only screen and (min-width: ${breakpoints.laptop}) {
		right: -${rem(50)};
		transform: rotate(-10deg);
		top: -22%;
		height: ${rem(600)};
		width: 48%;
	}
`;

export default function SimpleHeader({
	simpleTitle: title,
	simpleSubtitle: subTitle,
	simpleImage: src,
}) {
	return (
		<Container>
			<LineWrap>
				<Image alt="" layout="fill" src="/images/gold-line-four.png" />
			</LineWrap>
			<Flex flexDirection={['column', 'column', 'row']} pr={[rem(55), rem(55), rem(24)]}>
				<Box className="left-box" width={[1, 1, 1 / 2, 3 / 5]}>
					<Image
						alt="Nishi About"
						src={src?.sourceUrl || '/images/about-header-image.png'}
						layout="fill"
					/>
				</Box>
				<Box
					width={[1, 1, 1 / 2, 2 / 5]}
					className="right-box"
					display="flex"
					flexDirection="column"
					textAlign={['left', 'left', 'center']}
					justifyContent={['initial', 'initial', 'flex-end']}
					p={[
						`${rem(34)} ${rem(40)} ${rem(35)} ${rem(28)}`,
						`${rem(34)} ${rem(40)} ${rem(35)} ${rem(28)}`,
						`${rem(34)} ${rem(40)} ${rem(139)} ${rem(28)}`,
					]}
				>
					<TextContentRight>
						<Text pb={[rem(19), rem(19)]} variant="highlight" color={theme.colors.gray}>
							{subTitle && subTitle.toUpperCase()}
						</Text>
						<Text
							variant={['headingMobile', 'headingMobile', 'heading']}
							color={theme.colors.gray}
							className="header-text"
							width={[rem(150), rem(150), rem(250)]}
						>
							{title}
						</Text>
					</TextContentRight>
				</Box>
			</Flex>
		</Container>
	);
}
