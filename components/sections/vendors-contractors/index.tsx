import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import { PrimaryButton } from 'components/common/button';
import React from 'react';
import Link from 'next/link';

const FullWidthContainer = styled.div`
	background-color: ${theme.colors.lightTan};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-bottom: ${rem(64)};
	}
`;

const Container = styled.section`
	max-width: ${rem(1440)};
	margin: 0 auto;
	position: relative;
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	padding-left: ${rem(16)};
	padding-right: ${rem(16)};
	padding-top: ${rem(187)};
	padding-bottom: ${rem(63)};

	.space-mobile {
		padding-left: ${rem(30)};
		text-align: right;
	}

	.your {
		width: 100%;
	}

	.text-content {
		z-index: 1;
	}
	.content-right {
		z-index: 1;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-top: 0;
		padding-bottom: 0;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: ${rem(434)};

		:before {
			content: '';
			width: calc(50% - 40px);
			background-color: ${theme.colors.sand};
			position: absolute;
			height: 1px;
			top: 0;
			right: 0;
		}

		:after {
			content: '';
			background-image: url(/images/your-space-bg.png);
			background-size: cover;
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			height: ${rem(315)};
			z-index: -1;
		}

		.your {
			width: auto;
		}

		.text-content {
			max-width: ${rem(379)};
			margin-left: auto;
			margin-left: auto;
			margin-right: ${rem(40)};
		}

		.content-right {
			height: 100%;
			padding-top: initial;
			align-items: center;
			display: flex;
			border-bottom: ${rem(1)} solid ${theme.colors.tan};
		}
	}

	@media only screen and (min-width: ${breakpoints.laptop}) {
		padding: 0;
	}
`;

const SquareWrap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;

const Square = styled.div`
	width: 100%;
	padding-bottom: calc(100% - 10px);
	position: relative;
	background-color: ${theme.colors.orange};

	img {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: ${rem(434)};
		height: ${rem(434)};
		padding-bottom: initial;

		img {
			width: ${rem(434)};
			height: ${rem(434)};
		}
	}
`;

export default function VendorsContractors({
	vendorscaption: caption = "LET'S WORK TOGETHER",
	vendorscontent:
		content = '<p><b> </b><span style="font-weight: 400;">It takes a monumental team effort to construct a firm, functional, and fetching space. That’s why we like to partner with the best of the best when it comes to our projects. If you’re looking for a team to finish the interiors of your new build or have a fabulous new line of throw pillows, drop us a line! We’d love to talk shop.</span></p>\n',
	vendorslink: link = {
		url: 'https://dev-nishi-design-studio.pantheonsite.io/contact/',
		title: 'connect with us',
		__typename: 'AcfLink',
	},
	vendorstitlelineone: lineOne = 'vendors +',
	vendorstitlelinetwo: lineTwo = 'contractors',
}) {
	return (
		<FullWidthContainer>
			<Container>
				<SquareWrap>
					<Square>
						<img src="/images/triangle-orange.png" />
					</Square>
				</SquareWrap>
				<Box
					width={[1, 1, 1 / 2]}
					className="text-content"
					flexDirection="column"
					alignItems="flex-end"
					display="flex"
					m="0 auto"
					zIndex={1}
				>
					<Flex flexWrap="wrap" mt={[rem(72), rem(72), 'initial']}>
						<Text variant="highlight">{caption}</Text>
						<Text
							className="your"
							variant={['headingMobile', 'headingMobile', 'headingMobile', 'heading']}
						>
							{lineOne}
						</Text>
						<Text
							className="space-mobile"
							variant={['headingMobile', 'headingMobile', 'headingMobile', 'heading']}
						>
							{lineTwo}
						</Text>
					</Flex>
				</Box>
				<Box
					className="content-right"
					width={[1, 1, 1 / 2]}
					pt={[rem(48), rem(48), 'initial']}
					justifyContent={[null, null, 'center']}
				>
					<Flex pt={[null, null, rem(32)]} flexDirection={'column'}>
						<Text
							variant="body"
							color={theme.colors.gray}
							maxWidth={rem(432)}
							mb={[rem(40)]}
							dangerouslySetInnerHTML={{ __html: content }}
						/>

						<PrimaryButton large>
							<Link href={link?.url} passHref>
								<a style={{ color: '#D78B32' }}>{link?.title}</a>
							</Link>
						</PrimaryButton>
					</Flex>
				</Box>
			</Container>
		</FullWidthContainer>
	);
}
