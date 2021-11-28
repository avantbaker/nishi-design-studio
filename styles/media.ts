import { rem } from 'polished';

export const breakpoints = {
	mobile: rem(425),
	mobileLarge: rem(640),
	tablet: rem(768),
	laptop: rem(1024),
	laptopLarge: rem(1440),
};

export const queries = {
	minMobile: `(min-width: ${breakpoints.mobile})`,
	minMobileLarge: `(min-width: ${breakpoints.mobileLarge})`,
	minTablet: `(min-width: ${breakpoints.tablet})`,
	minLaptop: `(min-width: ${breakpoints.laptop})`,
};
