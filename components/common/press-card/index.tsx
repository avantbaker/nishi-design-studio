import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';
import Image from 'next/image';
import Text from 'components/common/text';
import { Flex, Box } from 'rebass/styled-components';
import { SecondaryButton } from 'components/common/button';
import { breakpoints, queries } from 'styles/media';
import theme from 'styles/theme';

const ImageWrap = styled.div`
  position: relative;
  height: ${rem(250)};
  width: 100%;

  img {
    object-fit: cover;
     transition transform 0.5s ease-in-out;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-width: ${rem(454)};
    margin: 0 auto;
  }
`;

const StyledFlex = styled(Flex)`
	:hover ${ImageWrap} img {
		transform: scale(1.05);
	}
`;

const StyledButton = styled(SecondaryButton)`
	padding-left: 0;
	@media only screen and (min-width: ${breakpoints.tablet}) {
		${SecondaryButton} {
			padding-left: auto;
		}
	}
`;

const LogoImg = styled.img`
	height: ${rem(51)};
	margin-bottom: ${rem(24)};
`;

const noop = 'javascript:function noop() { return false; }';
export default function PressCard({
	title,
	label,
	description,
	src,
	logoSrc,
	link,
	...rest
}) {
	return (
		<StyledFlex
			as="a"
			href={link || noop}
			target={link ? '_blank' : ''}
			rel="noreferrer"
			flexDirection={['column', 'column', 'row']}
			mb={[rem(40), rem(40)]}
		>
			<Box width={[1, 1, 1 / 2]} mb={[rem(34), rem(34), 0]} pr={[null, null, rem(24)]}>
				<ImageWrap>
					<Image quality="100" alt={title} src={src} layout="fill" />
				</ImageWrap>
			</Box>
			<Box width={[1, 1, 1 / 2]}>
				<LogoImg src={logoSrc} />
				<Text variant="headingSmall" mb={[rem(14), rem(14), rem(5)]}>
					{title}
				</Text>
				<Text
					variant="bodySmall"
					color={theme.colors.gray}
					mb={[rem(27), rem(27), rem(16)]}
				>
					{label}
				</Text>
				<Text variant="body" color={theme.colors.textGray} mb={[rem(6), rem(6)]}>
					{description}
				</Text>
				{link && <StyledButton>read article</StyledButton>}
			</Box>
		</StyledFlex>
	);
}
