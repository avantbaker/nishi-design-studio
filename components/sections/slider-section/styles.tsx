import ListingCard from 'components/common/listing-card';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import { PagerList } from 'components/common/slider/styles';
import { Box, Flex } from 'rebass/styled-components';
export const FullWidthContainer = styled.section`
	position: relative;
`;
export const Container = styled.section`
	display: flex;
	flex-direction: column-reverse;
	padding: ${rem(4)} 0 ${rem(65)} 0;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		padding: 0 0 ${rem(34)} 0;
		// margin: 0 0 0 0;
	}
`;
export const TextContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: ${rem(25)};
	margin-left: auto;

	max-width: ${rem(226)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin: 0 auto;
		max-width: ${rem(400)};
		padding: 0 ${rem(20)} 0 ${rem(16)};
	}
`;
export const EmblaContainer = styled.div`
	display: flex;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}
`;
export const EmblaParent = styled.div`
	overflow: hidden;
	width: 100%;
`;
export const StyledPagerList = styled(PagerList)`
	justify-content: right;
	li {
		color: ${theme.colors.gray};

		a {
			padding: 0 ${rem(16)} ${rem(14)} ${rem(16)};

			:last-child {
				padding-right: 0;
			}
		}

		&.selected {
			text-shadow: ${rem(0)} ${rem(0)} ${rem(1)} ${theme.colors.gray};
		}
	}

	:after {
		left: 0;
		width: ${({ lineWidth }) => lineWidth || '77%'};
	}
	s @media only screen and (min-width: ${breakpoints.tablet}) {
		min-width: ${rem(230)};
	}
`;
export const ImageWrap = styled.div`
	position: relative;
	min-width: 100vw;
	height: ${rem(205)};

	img {
		object-fit: cover;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		height: ${rem(700)};
	}
`;
export const TabletLineImg = styled.img`
	display: none;
	@media only screen and (min-width: ${breakpoints.tablet}) {
		display: block;
		width: 50%;
		z-index: -1;
		position: absolute;
		right: -${rem(10)};
		top: 50%;
	}
`;
export const LineWrap = styled.div`
	position: relative;
	height: ${rem(145)};
	width: 100vw;
	margin-bottom: ${rem(12)};

	img {
		object-fit: contain;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: 40%;
		position: absolute;
		height: ${rem(275)};
		left: -6%;
		top: ${rem(245)};
		z-index: -1;
		img {
			object-fit: contain;
		}
	}
`;
export const StyledListingCard = styled(ListingCard)`
	margin-bottom: ${rem(32)};
	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-bottom: 0;
		position: absolute;
		left: 70%;
		bottom: ${rem(84)};
		transform: translate(-50%, -50%);
	}
`;

export const EmblaWrapper = styled(Flex)`
	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-bottom: ${rem(40)};
	}
`;
export const RightBox = styled(Box)`
	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-left: 3rem;
	}
`;
