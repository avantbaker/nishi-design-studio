import styled from 'styled-components';
import theme from 'styles/theme';
import Link from 'next/link';
import Image from 'next/image';
import { SecondaryButton } from 'components/common/button';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import Nav from 'components/common/nav';
import StartYourSpace from 'components/sections/start-your-space';
import BrandsParters from 'components/sections/brands-partners';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import ImageGrid from 'components/common/image-grid';
import DarkSlider from 'components/common/dark-slider';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import Error from '../_error';
import { SpacesQuery, SpaceDetailsQuery } from 'lib/urql/queries/pages';
import { expertiseRenderedMap } from 'lib/urql/fragments/spaceDetailSection';
import { getData } from 'lib/utils';

const PageContent = styled.section`
	background-color: ${theme.colors.lightTan};
`;

const Divider = styled.div`
	padding: ${rem(12)} 0;
`;

const StartYourSpaceTan = styled(StartYourSpace)`
	background-color: ${theme.colors.lightTan};
`;

const StyledImageGrid = styled(ImageGrid)`
	margin-left: -${rem(24)};

	@media only screen and (min-width: ${breakpoints.mobileLarge}) {
		margin-left: 0;
	}
`;

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	list-style: none;
	padding: 0;
	max-width: ${rem(355)};
	margin-left: auto;
	margin-right: 0;

	li {
		font-size: ${rem(14)};
		color: ${theme.colors.gray};
		text-align: right;
		width: 50%;
		padding: ${rem(2)} 0;
	}
`;

const BannerContainer = styled.div`
	position: relative;
	height: ${rem(362)};
	margin-bottom: ${rem(42)};
	width: 100vw;
	margin-left: -${rem(26)};

	img {
		object-fit: cover;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: 100%;
		margin-left: 0;
	}
`;

const BannerWrap = styled.div`
  position: relative;
  height: ${rem(205)};
  width: 100vw;
  margin: 0 auto;
  margin-left: -${rem(26)};

  img {
    transition transform 0.5s ease-in-out;
  }

  :hover img {
    transform: scale(1.05);
  }

  @media only screen and (min-width: ${breakpoints.mobileLarge}) {
    width: 100%;
    margin-left: 0;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    height: ${rem(452)};
    width: 100%;
    margin-left: auto;
  }
`;

const NextSpace = styled.a`
	position: relative;
	display: flex;
	align-items: center;
	color: ${theme.colors.orange};
	font-weight: 800;
	font-size: ${rem(15)};
	line-height: ${rem(18)};
	letter-spacing: ${rem(0.15)};

	:before {
		content: '';
		width: ${rem(34)};
		height: ${rem(34)};
		border: ${rem(1)} solid ${theme.colors.orange};
		border-radius: 50%;
		position: absolute;
		left: 45%;
	}
`;

const GoldLineLeft = styled.img`
	width: 53%;
	height: ${rem(180)};
	position: absolute;
	left: -${rem(75)};
	top: ${rem(375)};
`;
const GoldLineRight = styled.img`
	height: ${rem(62.12)};
	width: 50%;
	right: 0;
	top: ${rem(490)};
	position: absolute;
`;

const ArrowRightSolid = styled.div`
	background-image: url('/images/active-right-arrow.png');
	background-size: cover;
	width: ${rem(34)};
	height: ${rem(34)};
	margin-left: ${rem(11)};
	cursor: pointer;
	position: relative;
	border-radius: 50%;
`;
const BodyContent = styled(Text)`
	p {
		&:first-of-type {
			margin-top: 0;
		}
	}
`;

const items = [
	{
		title: 'Our process',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
		src: '/images/dark-slider-placeholder.png',
	},
	{
		title: 'Our process',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
		src: '/images/dark-slider-placeholder.png',
	},
	{
		title: 'Our process',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
		src: '/images/dark-slider-placeholder.png',
	},
	{
		title: 'Our process',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
		src: '/images/dark-slider-placeholder.png',
	},
	{
		title: 'Our process',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum dignissim porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper odio eunum.',
		src: '/images/dark-slider-placeholder.png',
	},
];

const ResidencePage = ({ slug, error }) => {
	const isTablet = useMediaQuery(queries.minTablet);
	const [results] = useQuery({
		query: SpaceDetailsQuery,
		variables: { slug },
	});

	const { error: clientError, data, fetching } = results;

	if (error || clientError) {
		return <Error pageProps={{}} />;
	}

	const {
		title,
		spaceInformation,
		spacesDetailSection,
		brandsAndPartners,
		processSlider,
		imageGallery,
		startYourSpace,
	} = data?.post;

	const {
		expertiseBanner,
		expertiseContentTitle,
		expertiseContent,
		expertiseBottomBanner,
	} = spacesDetailSection;

	const { imageSections } = imageGallery;

	const galleryOne = imageSections?.[0]?.images;
	const galleryTwo = imageSections?.[1]?.images;

	return (
		<motion.div {...framerOptions}>
			<PageContent>
				<Nav />
				{!fetching && (
					<>
						<Flex
							maxWidth={rem(1044)}
							flexDirection="column"
							margin="0 auto"
							mt={[rem(2), rem(2)]}
							px={[rem(26), rem(26)]}
							mb={[rem(128), rem(128), rem(134)]}
						>
							{spaceInformation && (
								<Flex
									flexDirection={['column', 'column', 'row']}
									justifyContent="space-between"
								>
									<Box width={[1, 1, 1 / 4]} mb={[rem(43), rem(43)]}>
										<Flex justifyContent="space-between">
											<Text mb={[rem(12), rem(12)]} variant="bodySmall">
												{spaceInformation.spaceLocation}
											</Text>
											<Text variant="bodySmall" fontSize={rem(15)}>
												{spaceInformation.spaceYear}
											</Text>
										</Flex>
										<Text variant="headingSmall" width={['60%', '60%']}>
											{title}
										</Text>
									</Box>
									<Box width={[1, 1, 1 / 3]} pb={[rem(30), rem(30)]}>
										<Text
											variant="highlight"
											width={['60%', '60%']}
											ml={['auto', 'auto']}
											textAlign={['right', 'right']}
										>
											EXPERTISE RENDERED
										</Text>
										<List>
											{spacesDetailSection?.expertiseRendered &&
												spacesDetailSection?.expertiseRendered.map((expertise, idx) => {
													return (
														<li key={`expertise-${expertise}-${idx}`}>
															{expertiseRenderedMap[expertise]}
														</li>
													);
												})}
										</List>
									</Box>
								</Flex>
							)}
							{isTablet && (
								<>
									<GoldLineLeft alt="Gold line" src="/images/blog-lines-left.png" />
									<GoldLineRight alt="Gold line" src="/images/blog-lines-right.png" />
								</>
							)}
							<BannerContainer>
								<Image
									src={
										expertiseBanner
											? expertiseBanner?.sourceUrl
											: `/elements/residential/residence-detail.png`
									}
									layout="fill"
								/>
							</BannerContainer>
							<Flex flexDirection={['column', 'column', 'row']}>
								<Box width={[1, 1, 2 / 6]}>
									<Text
										mb={[rem(12), rem(12)]}
										variant="highlight"
										width={['60%', '60%']}
									>
										{expertiseContentTitle}
									</Text>
								</Box>
								<Box width={[1, 1, 4 / 6]}>
									<BodyContent
										variant="body"
										mb={[rem(47), rem(47)]}
										color={theme.colors.textGray}
										className="text-content"
										dangerouslySetInnerHTML={{ __html: expertiseContent }}
									/>
								</Box>
							</Flex>
							<StyledImageGrid images={galleryOne} />
							<BannerWrap>
								<Image
									alt="Residential banner"
									src={
										expertiseBottomBanner
											? expertiseBottomBanner.sourceUrl
											: `${
													isTablet
														? '/elements/residential/residence-banner.png'
														: '/elements/residential/residence-banner-mobile.png'
											  }`
									}
									layout="fill"
								/>
							</BannerWrap>
						</Flex>
						<BrandsParters {...brandsAndPartners} />
						<DarkSlider {...processSlider} />
						<Flex
							maxWidth={rem(1044)}
							flexDirection="column"
							margin="0 auto"
							mt={[rem(128), rem(128), rem(134)]}
							px={[rem(26), rem(26)]}
							mb={[rem(128), rem(128), rem(134)]}
						>
							<StyledImageGrid images={galleryTwo} />
						</Flex>
						<Flex
							maxWidth={rem(400)}
							justifyContent="space-between"
							alignItems="center"
							flexDirection={['column', 'column', 'row']}
							ml="auto"
							mr="auto"
							mt={[rem(40), rem(40), rem(64)]}
						>
							<Link href="/spaces">
								<a>
									<SecondaryButton mr={[rem(40), null, null]} large arrowLeft>
										back to gallery
									</SecondaryButton>
								</a>
							</Link>
							<Link href="/" passHref>
								<NextSpace>
									next space
									<ArrowRightSolid />
								</NextSpace>
							</Link>
						</Flex>
						<StartYourSpace {...startYourSpace} />
						<Footer />
					</>
				)}
			</PageContent>
		</motion.div>
	);
};

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const client = initUrqlClient(
		{
			url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
			exchanges: [dedupExchange, cacheExchange, fetchExchange],
		},
		true
	);
	const posts = await client
		.query(
			`
			{
				posts {
					nodes {
						id
						title
						slug
						spaceInformation {
							spaceLocation
							spaceYear
							spaceFeaturedImage {
								sourceUrl
							}
						}
					}
				}
			}
		`
		)
		.toPromise()
		.then((result) => {
			const { nodes } = result?.data?.posts;
			return nodes;
		});
	// Get the paths we want to pre-render based on posts
	const paths = posts?.map((post) => ({
		params: { slug: post?.slug },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps(ctx) {
	const { slug } = ctx?.params || {};

	const ssrCache = ssrExchange({ isClient: false });
	const client = initUrqlClient(
		{
			url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
			exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
		},
		true
	);
	let hasResult = false;
	if (slug) {
		await client
			.query(SpaceDetailsQuery, { slug })
			.toPromise()
			.then((result) => {
				if (result?.data?.post) {
					hasResult = true;
				}
			});
	}

	return {
		props: {
			urqlState: ssrCache.extractData(),
			revalidate: 600,
			slug,
			error: !hasResult,
		},
	};
}

export default withUrqlClient(
	(_) => ({
		url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
	}),
	{ ssr: false, staleWhileRevalidate: true } // Important so we don't wrap our component in getInitialProps
)(ResidencePage);
