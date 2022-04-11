import styled from 'styled-components';
import { rem } from 'polished';
import theme from 'styles/theme';

import {
	color,
	compose,
	typography,
	space,
	layout,
	variant,
	SpaceProps,
	LayoutProps,
	TypographyProps,
	ColorProps,
} from 'styled-system';

const variants = {
	body: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(16),
		fontWeight: 'normal',
		lineHeight: rem(24),
		color: theme.colors.textGray,
	},
	bodySmall: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(14),
		fontWeight: 'normal',
		lineHeight: rem(22),
		color: theme.colors.textGray,
	},
	bodyLarge: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(20),
		fontWeight: 'normal',
		lineHeight: rem(28),
		color: theme.colors.gray,
	},
	highlight: {
		fontFamily: theme.typography.fonts.secondary,
		fontSize: rem(13),
		fontWeight: 'bold',
		lineHeight: rem(19),
		letterSpacing: rem(8.13),
		color: theme.colors.gray,
	},
	highlightLarger: {
		fontFamily: theme.typography.fonts.secondary,
		fontSize: rem(17),
		fontWeight: 'bold',
		lineHeight: rem(23),
		letterSpacing: rem(8.13),
		color: theme.colors.gray,
	},
	highlightMobile: {
		fontFamily: theme.typography.fonts.secondary,
		fontSize: rem(10),
		fontWeight: 'bold',
		lineHeight: rem(11),
		letterSpacing: rem(6.24),
		color: theme.colors.gray,
	},
	heading: {
		fontFamily: theme.typography.fonts.secondary,
		fontSize: rem(80),
		fontWeight: 'normal',
		lineHeight: rem(80),
		color: theme.colors.gray,
	},
	headingLarger: {
		fontFamily: theme.typography.fonts.secondary,
		fontSize: rem(83),
		fontWeight: 'normal',
		lineHeight: rem(83),
		color: theme.colors.gray,
	},
	headingExpertise: {
		fontFamily: theme.typography.fonts.secondary,
		fontSize: rem(65),
		fontWeight: 'normal',
		lineHeight: rem(65),
		color: theme.colors.gray,
	},
	headingMobile: {
		fontFamily: theme.typography.fonts.secondary,
		fontSize: rem(48.42),
		fontWeight: 'normal',
		lineHeight: rem(48.42),
		color: theme.colors.gray,
	},
	headingSmall: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(50),
		fontWeight: 'normal',
		lineHeight: rem(51),
		color: theme.colors.gray,
	},
	headingSmallCard: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(40),
		fontWeight: 'normal',
		lineHeight: rem(40),
		color: theme.colors.gray,
	},
	headingSmallMobile: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(35),
		fontWeight: 'normal',
		lineHeight: rem(35),
		color: theme.colors.gray,
	},
	headingSmallMobileCard: {
		fontFamily: theme.typography.fonts.secondary,
		fontSize: rem(35),
		fontWeight: 'normal',
		lineHeight: rem(35),
		color: theme.colors.white,
	},
	label: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(50),
		fontWeight: 'normal',
		lineHeight: rem(51),
		color: theme.colors.gray,
	},
	labelMobile: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(13.22),
		fontWeight: 'normal',
		lineHeight: rem(48.15),
		color: theme.colors.gray,
	},
	action: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(15),
		fontWeight: 'bold',
		letterSpacing: rem(0.38),
		lineHeight: rem(18),
		color: theme.colors.black,
	},
	actionMobile: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(10.14),
		fontWeight: 'bold',
		letterSpacing: rem(0.5),
		lineHeight: rem(11.59),
		color: theme.colors.black,
	},
	caption: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(14),
		letterSpacing: rem(0.5),
		lineHeight: rem(16),
		color: theme.colors.orange,
	},
	captionMobile: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(7.14),
		letterSpacing: rem(0.26),
		lineHeight: rem(11.59),
		color: theme.colors.orange,
	},
	button: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(12),
		fontWeight: 'regular',
		letterSpacing: rem(0.12),
		lineHeight: rem(14),
		color: theme.colors.orange,
	},
	sectionCaption: {
		fontFamily: theme.typography.fonts.secondary,
		fontSize: rem(15.72),
		fontWeight: 'regular',
		letterSpacing: rem(8.13),
		lineHeight: rem(18),
		color: theme.colors.gray,
	},
	cardSubtext: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(24),
		fontWeight: 'bold',
		lineHeight: rem(26),
		color: theme.colors.tan,
	},
	cardBody: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(18),
		fontWeight: 'normal',
		lineHeight: rem(25),
		color: theme.colors.tan,
	},
	cardSubtextMobile: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(20),
		fontWeight: 'bold',
		lineHeight: rem(23),
		color: theme.colors.tan,
	},
	cardBodyMobile: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(16),
		fontWeight: 'normal',
		lineHeight: rem(22),
		color: theme.colors.tan,
	},
	processTitle: {
		fontFamily: theme.typography.fonts.primary,
		fontSize: rem(40),
		fontWeight: 'bold',
		lineHeight: rem(80),
		color: theme.colors.tan,
	},
};

type TextProps = SpaceProps &
	LayoutProps &
	TypographyProps &
	ColorProps & {
		variant: keyof typeof variants;
		children: React.ReactNode;
	};

const Text = styled.div<TextProps>`
	margin: 0;
	padding: 0;

	${variant({ variants })}
	${compose(space, layout, color, typography)}
`;

Text.defaultProps = {
	variant: 'body',
};

export default Text;
