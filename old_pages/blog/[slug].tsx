import styled from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import RelatedArticles from 'components/sections/related-articles';
import Nav from 'components/common/nav';
import { SecondaryButton } from 'components/common/button';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import Link from 'next/link';
import Twitter from 'components/common/icons/twitter';
import LinkedIn from 'components/common/icons/linkedin';
import Facebook from 'components/common/icons/facebook';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import {
	BlogDetailsQuery,
	BlogPageQuery,
	SpaceDetailsQuery,
} from 'lib/urql/queries/pages';
import { getData } from 'lib/utils';
import { normalizeBlogData } from 'pages/api/mocks';

const PageContent = styled.section`
	background-color: ${theme.colors.lightTan};
	position: relative;

	.button-link {
		margin-bottom: ${rem(27)};
		@media only screen and (min-width: ${breakpoints.tablet}) {
			margin-bottom: 0;
			margin-right: ${rem(16)};
		}
	}
`;

const BannerContainer = styled.div`
	position: relative;
	margin-bottom: ${rem(42)};
	width: 100vw;
	height: ${rem(216)};
	margin-left: -${rem(26)};

	img {
		object-fit: cover;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: 100%;
		height: ${rem(362)};
		margin-left: 0;
	}
`;

const Divider = styled.div`
	padding: ${rem(12)} 0;
`;

const SocialFlex = styled(Flex)`
	a {
		padding: ${rem(4)};
	}
`;

const GoldLineLeft = styled.img`
	width: 55%;
	height: ${rem(180)};
	position: absolute;
	left: -${rem(80)};
	top: ${rem(375)};
`;
const GoldLineRight = styled.img`
	height: ${rem(62.12)};
	width: 40%;
	right: 0;
	top: ${rem(450)};
	position: absolute;
`;

function BlogDetail({ slug }) {
	const isTablet = useMediaQuery(queries.minTablet);
	const [results] = useQuery({
		query: BlogDetailsQuery,
		variables: { slug },
	});
	const { blog, date, tags, title } = getData('article', results);
	const { nodes } = getData('articles', results) || {};

	const dateObj = new Date(date);
	const dateString = `${dateObj.getMonth()}.${dateObj.getDate()}.${dateObj.getFullYear()}`;

	const articles = normalizeBlogData(nodes);

	return (
		<motion.div {...framerOptions}>
			<PageContent>
				<Nav />
				<Flex
					maxWidth={rem(1044)}
					flexDirection="column"
					margin="0 auto"
					mt={[rem(2), rem(2)]}
					px={rem(26)}
					className="top-flex"
				>
					<Flex
						flexDirection={['column', 'column', 'row']}
						justifyContent="space-between"
					>
						<Box width={[1, 1, rem(300)]} mb={[rem(43), rem(43)]}>
							<Flex justifyContent="space-between" mb={[rem(26), rem(26)]}>
								<Text
									mb={[rem(12), rem(12)]}
									variant="bodySmall"
									color={theme.colors.gray}
								>
									{dateString}
								</Text>
								<Text variant="bodySmall" fontSize={rem(15)} color={theme.colors.gray}>
									{tags?.nodes?.map(
										(tag, i) => `${tag.name} ${i < tags.length - 1 ? '| ' : ''}`
									)}
								</Text>
							</Flex>
							<Text
								variant="headingSmall"
								mb={[rem(3), rem]}
								width={['50%', '50%', '100%']}
							>
								{title}
							</Text>
						</Box>
					</Flex>
					{isTablet && (
						<>
							<GoldLineLeft alt="Gold line" src="/images/blog-lines-left.png" />
							<GoldLineRight alt="Gold line" src="/images/blog-lines-right.png" />
						</>
					)}
					<BannerContainer>
						<Image
							quality="100"
							alt="Nishi blog"
							src={blog?.blogimage?.sourceUrl || `/images/blog-detail.png`}
							layout="fill"
						/>
					</BannerContainer>
					<Flex flexDirection={['column', 'column', 'row']}>
						<Box width={[1, 1, 2 / 6]}>
							<Text mb={[rem(36), rem(36), rem(12)]} variant="highlight">
								{blog?.blogintrotext}
							</Text>
						</Box>
						<Box width={[1, 1, 4 / 6]}>
							<Text
								variant="body"
								mb={[rem(47), rem(47)]}
								color={theme.colors.textGray}
								className="text-content"
								dangerouslySetInnerHTML={{ __html: blog?.blogcontent }}
							/>
							<Flex
								flexDirection={['column', 'column', 'row']}
								alignItems={['flex-start', 'flex-start', 'center']}
								justifyContent="space-between"
							>
								<Link href={blog?.bloglink?.url || '/'}>
									<a className="button-link">
										<SecondaryButton large>outbound link</SecondaryButton>
									</a>
								</Link>
								<Flex flexDirection={['column', 'column', 'row']} pr={rem(16)}>
									<Text
										variant="highlight"
										lineHeight={['initial', 'initial', rem(40)]}
										color={theme.colors.orange}
										mr={rem(16)}
										mb={[rem(15), rem(15), 'initial']}
										width={['80%', '80%', '100%']}
										display={['block', 'block', 'none', 'block']}
									>
										SHARE THIS ARTICLE
									</Text>
									<SocialFlex>
										<Link href="https://twitter.com/nishidesignatl">
											<a>
												<Twitter fill={theme.colors.orange} />
											</a>
										</Link>
										<Link href="https://www.facebook.com/nishidesignstudio/">
											<a>
												<Facebook fill={theme.colors.orange} />
											</a>
										</Link>
										<Link href="https://www.linkedin.com/in/nishidonovan/">
											<a>
												<LinkedIn fill={theme.colors.orange} />
											</a>
										</Link>
									</SocialFlex>
								</Flex>
							</Flex>
						</Box>
					</Flex>
					<RelatedArticles articles={articles} />
				</Flex>
				<Footer />
			</PageContent>
		</motion.div>
	);
}

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const client = initUrqlClient(
		{
			url: 'https://live-nishi-design-studio.pantheonsite.io/graphql',
			exchanges: [dedupExchange, cacheExchange, fetchExchange],
		},
		true
	);
	const posts = await client
		.query(BlogPageQuery)
		.toPromise()
		.then((result) => {
			const { nodes } = getData('articles', result);
			return nodes;
		});
	// Get the paths we want to pre-render based on posts
	const paths = posts?.map((post) => ({
		params: { slug: post?.slug },
	}));

	return { paths, fallback: 'blocking' };
}
export async function getStaticProps(ctx) {
	const { slug } = ctx?.params || {};

	const ssrCache = ssrExchange({ isClient: false });
	const client = initUrqlClient(
		{
			url: 'https://live-nishi-design-studio.pantheonsite.io/graphql',
			exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
		},
		true
	);
	let hasResult = false;
	if (slug) {
		await client
			.query(BlogDetailsQuery, { slug })
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
			slug,
			error: !hasResult,
		},
		revalidate: 30,
	};
}

export default withUrqlClient(
	(_) => ({
		url: 'https://live-nishi-design-studio.pantheonsite.io/graphql',
	}),
	{ ssr: false, staleWhileRevalidate: true } // Important so we don't wrap our component in getInitialProps
)(BlogDetail);
