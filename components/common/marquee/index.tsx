import styled, { keyframes } from 'styled-components';
import Text from 'components/common/text';
import theme from 'styles/theme';
import { rem } from 'polished';

const marquee = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
	display: flex;
	position: absolute;
	animation: ${marquee} 20s linear infinite;
`;

export default function Marquee({ text }) {
	return (
		<MarqueeContainer>
			<Text
				className="heading"
				variant="heading"
				color={theme.colors.orange}
				width={rem(2276)}
			>
				{text}
			</Text>
		</MarqueeContainer>
	);
}
