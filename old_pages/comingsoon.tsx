import Text from 'components/common/text';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import theme from 'styles/theme';

const PageWrapper = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const PageContent = styled('div')`
	width: 100%;
	max-width: 700px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	transform: translateY(-75px);
`;
const ImageWrapper = styled('div')`
	width: 400px;
	height: 400px;
	position: relative;
	display: flex;
	justify-content: center;
`;

const CustomText = styled(Text)`
	transform: translateY(-200%);
`;
function ComingSoon() {
	return (
		<PageWrapper>
			<PageContent>
				<ImageWrapper>
					<Image
						src="/logos/black/NDS-Logo-Black.svg"
						layout="fill"
						objectFit="contain"
					/>
				</ImageWrapper>
				<CustomText variant="cardSubtext" color={theme.colors.orange}>
					Coming Soon
				</CustomText>
			</PageContent>
		</PageWrapper>
	);
}

export default ComingSoon;
