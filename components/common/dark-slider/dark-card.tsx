import React from 'react';
import { rem } from 'polished';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex } from 'rebass/styled-components';
import styled, { css } from 'styled-components';
import Text from 'components/common/text';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { SecondaryButton } from 'components/common/button';

const ArrowRight = styled.div`
	background-image: url('/images/active-right-arrow.png');
	background-size: cover;
	border-radius: 50%;
	transform: initial;
	width: ${rem(34)};
	height: ${rem(34)};
`;

export const Container = styled.div`
	transition: transform 0.4s ease;

	height ${ArrowRight} {
		display: none;
		margin-left: auto;
	}

	@media only screen and (min-width: ${breakpoints.laptop}) {
		margin-bottom: ${rem(49)};
		width: ${rem(1000)};
	}
`;

const ImgWrap = styled.div`
	position: relative;
	margin-bottom: ${rem(13)};

	width: ${rem(242)};
	height: ${rem(266)};

	img {
		object-fit: cover;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: ${rem(1000)};
		height: ${rem(466)};
	}

	@media only screen and (min-width: ${breakpoints.laptop}) {
		margin-bottom: 0;
	}
`;

export default function DarkCard({ title, description, src, active, ...rest }) {
	return (
		<Container active={active} {...rest}>
			<ImgWrap>
				<Image quality="100" alt={title} src={src} layout="fill" />
			</ImgWrap>
		</Container>
	);
}
