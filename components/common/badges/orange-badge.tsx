import theme from 'styles/theme';
import Image from 'next/image';
import { rem } from 'polished';
import styled, { keyframes } from 'styled-components';
import { FC } from 'react';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
	width: ${rem(154)};
	height: ${rem(154)};
	position: relative;
	background-color: ${theme.colors.lightOrange};
	border-radius: 50%;
`;

const OuterImage = styled.div`
	display: flex;

	img {
		padding: ${rem(6)} !important;
		animation: ${spin} 16s linear infinite;
	}
`;

const InnerImage = styled.div`
	position: absolute;
	top: 51%;
	left: 53%;
	transform: translate(-50%, -50%);
`;

export const OrangeBadge: FC<{}> = ({ ...rest }) => (
	<Container {...rest}>
		<OuterImage>
			<Image quality="100" alt="" layout="fill" src="/images/green-badge-outer.png" />
		</OuterImage>
		<InnerImage>
			<Image
				quality="100"
				alt=""
				width="82px"
				height="106px"
				src="/images/green-badge-inner.png"
			/>
		</InnerImage>
	</Container>
);

export default OrangeBadge;
