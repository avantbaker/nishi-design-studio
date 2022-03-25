import { Flex, Box } from 'rebass/styled-components';
import Link from 'next/link';
import Text from 'components/common/text';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import theme from 'styles/theme';
import Marquee from 'components/common/marquee';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';

import { SecondaryButton } from 'components/common/button';

const Container = styled.section`
	padding: 0 0 ${rem(6)} 0;
	background-color: ${theme.colors.lightOrange};
	color: ${theme.colors.white};

	.left-box {
		position: relative;
		height: ${rem(361)};

		img {
			object-fit: cover;
		}
		@media only screen and (min-width: ${breakpoints.tablet}) {
			height: ${rem(464)};
		}
	}

	.heading {
		white-space: nowrap;
		font-family: ${theme.typography.fonts.primary};
		font-weight: bold;
	}
`;

const TextContent = styled.div`
	width: ${rem(270)};
	text-align: right;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding-top: ${rem(36)};
`;

const CustomImageContainer = styled.div`
	width: '100%';
	max-width: ${rem(170)};
	> div {
		position: unset !important;
	}
`;
const CustomImage = styled(Image)`
	object-fit: cover;
	width: 100% !important;
	position: relative !important;
	height: unset !important;
	max-height: 80px !important;
	filter: invert(100%);
`;
export default function PressHeader({
	pressfeaturedimg: img = {
		sourceUrl:
			'https://dev-nishi-design-studio.pantheonsite.io/wp-content/uploads/2022/03/beaver-or-storm4.jpg',
	},
	pressfeaturedpost: post,
	presstestimonial:
		testimonial = 'A philosophy of maximalism drives Nishi Donovan’s distinctive approach to interior design.',
}) {
	return (
		<Container>
			<Flex flexDirection={['column', 'column', 'row']} pr={[rem(55), rem(55), rem(24)]}>
				<Box className="left-box" width={[1, 1, 3 / 5]}>
					<Image
						alt="Nishi Press"
						src={img?.sourceUrl || '/images/press-header.png'}
						layout="fill"
					/>
				</Box>
				<Box
					width={[1, 1, 2 / 5]}
					display="flex"
					flexDirection="column"
					alignItems={['flex-end', 'flex-end', 'center']}
				>
					<TextContent>
						<CustomImageContainer>
							<CustomImage
								alt="dwell logo"
								className="dwell-logo"
								src={post?.pressRelease?.pressLogo?.sourceUrl || '/images/dwell-logo.png'}
								layout="fill"
							/>
						</CustomImageContainer>
						<Text
							mt={[rem(35), rem(35)]}
							mb={[rem(8), rem(8)]}
							variant="headingSmall"
							color={theme.colors.white}
						>
							{post?.title}
						</Text>
						<Text mb={[rem(48), rem(48)]} variant="bodySmall" color={theme.colors.white}>
							{`${post?.pressRelease?.pressSeason} | ${post?.pressRelease?.pressEdition}`}
						</Text>
						<Text
							mb={[rem(8), rem(8)]}
							pl={[rem(25), rem(25)]}
							variant="body"
							color={theme.colors.white}
						>
							{testimonial}
						</Text>
						{post?.pressRelease?.pressLink && (
							<Link href={post?.pressRelease?.pressLink?.url || '/'}>
								<a>
									<SecondaryButton large color={theme.colors.white}>
										read the article
									</SecondaryButton>
								</a>
							</Link>
						)}
					</TextContent>
				</Box>
			</Flex>
			<Flex
				pb={rem(84)}
				mt={[rem(70), rem(70), rem(78)]}
				mb={[rem(55), rem(55), rem(78)]}
			>
				<Marquee text={testimonial} />
			</Flex>
		</Container>
	);
}
