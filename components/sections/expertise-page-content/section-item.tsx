import { rem } from 'polished';
import theme from 'styles/theme';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import Image from 'next/image';
import { breakpoints, queries } from 'styles/media';
import styled, { css } from 'styled-components';
import useMediaQuery from 'hooks/use-media-query';

const SectionText = styled(Text)`
	position: relative;
	font-size: ${rem(32.57)};
	line-height: ${rem(34.74)};
	font-family: ${theme.typography.fonts.primary};
	font-weight: bold;
	color: ${theme.colors.orange};
	opacity: 0.3;
	margin-bottom: ${rem(20)};
	max-width: ${rem(425)};
	cursor: none;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		font-size: ${rem(75)};
		line-height: ${rem(80)};
		margin-bottom: ${rem(23)};
		max-width: ${rem(905)};
		z-index: 1;

		:hover {
			opacity: 1;
		}
	}
`;

const SectionContent = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row-reverse;
		position: relative;
		margin-bottom: ${rem(131)};
	}
`;

const ImageWrap = styled.div`
	display: flex;
	align-items: end;
	column-gap: ${rem(8)};
	margin-bottom: ${rem(30)};
	justify-content: center;
	@media only screen and (min-width: ${breakpoints.tablet}) {
		column-gap: ${rem(13)};
		margin-bottom: 0;
		width: 40%;
		position: absolute;
		bottom: 0;
		right: 5%;
		bottom: -${rem(80)};
		z-index: 0;
	}
`;

const Container = styled.li`
	${({ active }) =>
		active &&
		css`
			margin-bottom: ${rem(58)};
			padding-top: ${rem(75)};
			${SectionText} {
				opacity: 1;
				margin-bottom: ${rem(30)};

				@media only screen and (min-width: ${breakpoints.tablet}) {
					margin-bottom: ${rem(75)};
				}
			}

			${SectionText}:after {
				content: '';
				background-color: ${theme.colors.sand};
				display: block;
				width: 75%;
				height: ${rem(1)};
				left: -${rem(28)};
				bottom: -${rem(9)};
				position: absolute;

				@media only screen and (min-width: ${breakpoints.tablet}) {
					width: ${rem(801)};
					left: -${rem(164)};
					bottom: -${rem(34)};
				}
			}
		`}
`;

export default function SectionItem({
	expertisesmallimg,
	expertiselargeimg,
	expertisecontent,
	expertisename,
	active,
	children,
	...rest
}) {
	const isTablet = useMediaQuery(queries.minTablet);
	return (
		<Container active={active} {...rest}>
			<SectionText>{children}</SectionText>
			{active && (
				<SectionContent>
					<ImageWrap>
						<Image
							quality="100"
							alt="Image title"
							width={!isTablet ? '81.28px' : '132px'}
							height={!isTablet ? '107.14px' : '174px'}
							src={expertisesmallimg?.sourceUrl || '/images/expertise-small.png'}
							layout="intrinsic"
						/>
						<Flex mb={rem(26)}>
							<Image
								quality="100"
								alt="Image title"
								width={!isTablet ? '176.72px' : '287px'}
								height={!isTablet ? '215.51px' : '350px'}
								src={expertiselargeimg?.sourceUrl || '/images/expertise-large.png'}
								layout="intrinsic"
							/>
						</Flex>
					</ImageWrap>
					<Text
						maxWidth={rem(525)}
						variant="body"
						color={theme.colors.black || 'black'}
						m={`0 auto 0 0`}
						dangerouslySetInnerHTML={{ __html: expertisecontent }}
					/>
				</SectionContent>
			)}
		</Container>
	);
}
