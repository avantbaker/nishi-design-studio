import ListingCard from 'components/common/listing-card';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import { PagerList } from 'components/common/slider/styles';

export const FullWidthContainer = styled.section`
	position: relative;
`;
export const Container = styled.section`
	display: flex;
	flex-direction: column-reverse;
	padding: ${rem(4)} 0 ${rem(65)} 0;
	max-width: ${rem(1106)};
	margin: 0 auto;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		padding: ${rem(86)} ${rem(24)} ${rem(65)} ${rem(24)};
	}
`;
export const EmblaContainer = styled.div`
	display: flex;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-bottom: ${rem(31)};
		flex-direction: row;
	}
`;
export const EmblaParent = styled.div`
	overflow: hidden;
	width: 100%;
	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: ${rem(458)};
	}
`;
export const EmblaParentSmall = styled.div`
	overflow: hidden;
	width: 100%;
`;
export const StyledPagerList = styled(PagerList)`
	flex-grow: 1;
	max-width: ${rem(230)};
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
			font-size: ${rem(18)};
		}
	}

	:after {
		left: 0;
		width: 77%;
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
		min-width: ${rem(458)};
		height: ${rem(510)};
	}
`;
export const ImageWrapSmall = styled.div`
	position: relative;
	min-width: 100vw;
	height: ${rem(205)};

	img {
		object-fit: cover;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: ${rem(700)};
		height: ${rem(510)};
	}
`;
export const TextPagerList = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	width: fit-content;
	align-self: flex-end;
	text-align: right;

	a {
		cursor: none;
		padding-bottom: ${rem(31)};
		padding-right: ${rem(18)};
		position: relative;
		width: 100%;
	}

	li {
		font-weight: normal;
	}

	li.selected {
		text-shadow: ${rem(0)} ${rem(0)} ${rem(1)} ${theme.colors.gray};

		:after {
			content: '';
			position: absolute;
			display: block;
			background-color: ${theme.colors.sand};
			height: 1px;
			width: 17%;
			right: 0;
			margin-top: ${rem(8)};
		}

		@media only screen and (min-width: ${breakpoints.tablet}) {
			:after {
				width: 26%;
			}
		}
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
		top: 43%;
		transform: rotate(-5deg);
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
const GoldLineSix = styled.img``;
export const StyledListingCard = styled(ListingCard)`
	margin-bottom: ${rem(32)};
	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-bottom: 0;
		position: absolute;
		left: 50%;
		bottom: ${rem(84)};
		transform: translate(-50%, -50%);
	}
`;
