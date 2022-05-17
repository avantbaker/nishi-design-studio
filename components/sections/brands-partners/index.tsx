import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import BlackBadge from 'components/common/badges/black-badge';
import { productsMap, servicesMap } from 'lib/urql/fragments/brandAndPartnersSection';

const FullWidthContainer = styled.section`
	width: 100%;
	background-image: url('/images/tan-bg.png');
`;

const Container = styled.section`
	max-width: ${rem(1440)};
	margin: 0 auto;
	position: relative;
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	padding-left: ${rem(40)};
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
		padding-top: ${rem(108)};
		padding-bottom: ${rem(194)};
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: ${rem(434)};

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
		}
	}

	@media only screen and (min-width: ${breakpoints.laptop}) {
		padding: 0 0 ${rem(27)} 0;
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
	opacity: 1;

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

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		:first-of-type {
			margin-right: ${rem(24)};
		}
	}
`;

const StyledBlackBadge = styled(BlackBadge)`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		left: auto;
		right: 10%;
	}
`;

export default function BrandsPartners({
	brandsTitleLineOne: titleOne,
	brandsTitleLineTwo: titleTwo,
	brandsProducts: products,
	brandServices: services,
}) {
	return (
		(products || services) && (
			<FullWidthContainer>
				<Container>
					<StyledBlackBadge />
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
						<Flex flexWrap="wrap" mt={[rem(72), rem(72), rem(24)]}>
							<Text
								className="your"
								variant={['headingMobile', 'headingMobile', 'heading']}
							>
								{titleOne}
							</Text>
							<Text
								className="space-mobile"
								variant={['headingMobile', 'headingMobile', 'heading']}
							>
								{titleTwo}
							</Text>
						</Flex>
					</Box>
					<Box
						className="content-right"
						width={[1, 1, 1 / 2]}
						pt={[rem(48), rem(48), 'initial']}
						justifyContent={[null, null, 'center']}
					>
						<Flex pt={[null, null, rem(32)]} flexDirection={['column', 'column', 'row']}>
							{products && (
								<Flex flexDirection="column" mb={[rem(40), rem(40), null]} mr={[rem(20)]}>
									<Text mb={[rem(18), rem(18)]} className="body-text" variant="highlight">
										PRODUCTS
									</Text>
									<List>
										{products.map(({ partner }) => {
											return (
												<Text as="li" variant="bodySmall" key={`product-${partner}`}>
													{partner}
												</Text>
											);
										})}
									</List>
								</Flex>
							)}
							{services && (
								<Flex flexDirection="column">
									<Text mb={[rem(18), rem(18)]} variant="highlight">
										SERVICES
									</Text>
									<List>
										{services.map(({ service }) => {
											return (
												<Text as="li" variant="bodySmall" key={`service-${service}`}>
													{service}
												</Text>
											);
										})}
									</List>
								</Flex>
							)}
						</Flex>
					</Box>
				</Container>
			</FullWidthContainer>
		)
	);
}
