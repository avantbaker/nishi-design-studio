import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import { SecondaryButton } from 'components/common/button';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import { useEffect, useState } from 'react';
import GoldBadge from 'components/common/badges/gold-badge';

const FullWidthContainer = styled.section`
	background-color: ${theme.colors.lightTan};
`;

const Container = styled(Flex)`
	position: relative;
	display: flex;

	padding: ${rem(96)} ${rem(22)} ${rem(50)} ${rem(24)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding: ${rem(129)} ${rem(28)} ${rem(111)} ${rem(24)};
		margin-left: auto;
		margin-right: 0;
		max-width: ${rem(1440)};
		margin: 0 auto;
	}

	@media only screen and (min-width: ${breakpoints.laptopLarge}) {
		padding-left: 0;
	}

	.left-box {
		position: relative;
	}
`;

const ServiceList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: ${rem(8)} ${rem(10)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		grid-template-columns: 1fr;
		li {
			font-size: ${rem(15)};
		}
	}
`;

const ServiceItem = styled(Text)<{ selected?: boolean }>`
	padding-bottom: ${rem(16)};
	color: rgba(215, 139, 50, 0.57);
	font-size: ${rem(11)};
	cursor: none;

	${({ selected }) =>
		selected &&
		css`
			color: ${theme.colors.gray};
			cursor: initial;

			@media only screen and (min-width: ${breakpoints.tablet}) {
				a {
					position: relative;
				}
				@keyframes animateLine {
					0% {
						width: 0;
					}
					100% {
						width: calc(100% - 80px);
					}
				}
				::after {
					content: '';
					height: ${rem(1)};
					background-color: ${theme.colors.sand};
					display: block;
					max-width: calc(100% - 80px);
					width: calc(100% - 80px);
					left: 0;
					margin-top: ${rem(12)};
					position: absolute;
					animation: animateLine 1s ease-in-out;
				}
			}
		`}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		font-size: ${rem(15)};
		white-space: nowrap;
	}
`;

const TextContent = styled(Flex)`
	z-index: 1;
	@media only screen and (min-width: ${breakpoints.tablet}) {
		max-width: ${rem(433)};
		position: absolute;
		top: 50%;
		transform: translate(-23%, -50%);
	}
`;

const ImgWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: fit-content;
      

  img {
    margin-bottom: ${rem(14)};
    transition transform 0.5s ease-in-out;
  }

  :hover .main-image {
    transform: scale(1.05);
  }  


  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-left: auto;
    margin-right: 0;
  }
`;

const SelectedHeadline = styled(Text)`
	text-indent: -${rem(27)};
	margin-left: ${rem(27)};
`;

const TriangleImg = styled.img`
	width: ${rem(120.47)};
	height: ${rem(116.53)};
	position: absolute;
	top: -${rem(20)};
	right: -${rem(18)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: ${rem(212.97)};
		height: ${rem(206)};
	}
`;

const BadgeWrap = styled.div`
	position: absolute;
	top: -${rem(10)};
	left: 50%;
	transform: translate(-50%, -50%);

	@media only screen and (min-width: ${breakpoints.tablet}) {
		left: auto;
		right: 15%;
	}
`;

const CustomImageContainer = styled.div`
	cursor: 'pointer';
	width: 100%;
	max-width: 512px;
	max-height: 526px;
	> div {
		position: unset !important;
	}
`;
const CustomImage = styled(Image)`
	object-fit: cover;
	width: 100% !important;
	position: relative !important;
	height: unset !important;
`;

export default function ExpertiseSection({ expertiseTitle: title, categories = [] }) {
	const [selectedService, setSelectedService] = useState(categories[1]?.title);
	const [selectedContent, setSelectedContent] = useState(categories[1]);
	const isTablet = useMediaQuery(queries.minTablet);

	function handleServiceSelect(e) {
		e.preventDefault();
		const selectedText = e.target.innerText.substring(2);
		if (selectedText === selectedService) {
			return;
		}
		setSelectedService(selectedText);
	}

	useEffect(() => {
		const displayContent = categories.find((data) => {
			return data.title === selectedService;
		});
		setSelectedContent(displayContent);
	}, [selectedService]);

	return (
		<FullWidthContainer>
			<Container flexDirection={['column', 'column', 'row']}>
				<BadgeWrap>
					<GoldBadge />
				</BadgeWrap>
				<Box
					width={[1, 1, 2 / 5]}
					mb={[rem(33), rem(33), rem(60)]}
					display="flex"
					flexDirection="column"
					className="left-box"
					position="relative"
				>
					<Flex flexDirection="column" width={['100%', '100%', 'initial']}>
						<Text variant="highlight" mb={[rem(24), rem(24), rem(52)]}>
							{title}
						</Text>
						<ServiceList>
							{categories &&
								categories.map(({ title }) => (
									<ServiceItem
										key={title}
										as="li"
										variant={['actionMobile', 'actionMobile', 'action']}
										selected={selectedService === title}
									>
										<a onClick={handleServiceSelect}>{`/ ${title}`}</a>
									</ServiceItem>
								))}
						</ServiceList>
					</Flex>
				</Box>
				<Box width={[1, 1, 3 / 5]} position="relative">
					<TextContent flexDirection="column">
						<SelectedHeadline
							mb={[rem(12), rem(12), rem(4)]}
							variant={['headingMobile', 'headingMobile', 'headingExpertise']}
						>
							{selectedContent?.headline?.toLowerCase()}
						</SelectedHeadline>
						<Text
							mb={[rem(43), rem(43), rem(43)]}
							variant={['bodySmall', 'bodySmall', 'bodyLarge']}
						>
							{selectedContent?.body}
						</Text>
						{isTablet && (
							<Link
								href={`expertise?q=${selectedContent?.headline
									?.toLowerCase()
									.split(' ')
									.join('-')}#${selectedContent?.headline
									?.toLowerCase()
									.split(' ')
									.join('-')}`}
							>
								<a>
									<SecondaryButton large>{selectedContent?.linkTitle}</SecondaryButton>
								</a>
							</Link>
						)}
					</TextContent>
					<ImgWrap>
						{isTablet ? (
							<Image
								quality="100"
								alt="service installation"
								className="main-image"
								layout="intrinsic"
								width="433px"
								height="645px"
								src={selectedContent?.image?.sourceUrl || '/images/rectangle-couch.png'}
							/>
						) : (
							<CustomImageContainer>
								<CustomImage
									alt="service installation"
									layout="fill"
									src={selectedContent?.image?.sourceUrl || '/images/rectangle-couch.png'}
								/>
							</CustomImageContainer>
						)}
						<TriangleImg src="/images/triangle-orange.png" />
						{!isTablet && (
							<Link
								href={`expertise?q=${selectedContent?.headline
									?.toLowerCase()
									.split(' ')
									.join('-')}#${selectedContent?.headline
									?.toLowerCase()
									.split(' ')
									.join('-')}`}
							>
								<a>
									<SecondaryButton large>{selectedContent?.linkTitle}</SecondaryButton>
								</a>
							</Link>
						)}
					</ImgWrap>
				</Box>
			</Container>
		</FullWidthContainer>
	);
}
