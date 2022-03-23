import React from 'react';
import { rem } from 'polished';
import Link from 'next/link';
import { Flex } from 'rebass/styled-components';
import styled, { css, keyframes } from 'styled-components';
import Text from 'components/common/text';
import theme from 'styles/theme';
import { SecondaryButton } from 'components/common/button';
import { breakpoints } from 'styles/media';

const animation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;  }
`;

const InnerContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	${({ selected }) =>
		selected &&
		css`
			animation-name: ${animation};
			animation-duration: 1.5s;
		`}
`;

const Container = styled.div<{ selected?: boolean }>`
	padding: ${rem(20)} ${rem(30)} ${rem(10)} ${rem(30)};
	background-color: ${(props) => (props.asCard ? '#fff' : 'transparent')};
	box-sizing: border-box;
	max-width: auto;
	height: ${rem(236)};

	a {
		position: relative;
		bottom: 0;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		height: ${rem(250)};
		width: ${rem(340)};
	}
`;

const ListingTitle = styled(Text)`
	line-height: ${rem(40)};
`;
export default function ListingCard({
	location,
	year,
	title,
	href,
	asCard,
	className,
	selected,
	...rest
}) {
	return (
		<Container className={className} asCard={asCard} {...rest}>
			<InnerContainer selected={selected}>
				<Flex mb={rem(18)} justifyContent="space-between">
					<Text variant="caption" letterSpacing="normal" color={theme.colors.gray}>
						{location}
					</Text>
					<Text variant="caption" letterSpacing="normal" color={theme.colors.gray}>
						{year}
					</Text>
				</Flex>
				<ListingTitle variant="headingSmall" width="fit-content" maxWidth="70%">
					{title}
				</ListingTitle>
				{asCard && (
					<Link href={href} passHref>
						<a>
							<SecondaryButton>explore</SecondaryButton>
						</a>
					</Link>
				)}
			</InnerContainer>
		</Container>
	);
}
