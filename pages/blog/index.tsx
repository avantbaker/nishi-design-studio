import { breakpoints } from 'styles/media';
import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import BlogCard from 'components/common/blog-card';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import SocialSection from 'components/sections/social-section';
import SignupSection from 'components/sections/signup-section';
import StartYourSpace from 'components/sections/start-your-space';
import MediaSection from 'components/sections/media-section';
import { mockBlogData, normalizeBlogData } from 'pages/api/mocks';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import { BlogPageQuery } from 'lib/urql/queries/pages';
import { getData, getPageData } from 'lib/utils';

const PageContent = styled.div`
	position: relative;
	overflow: hidden;
	:before {
		content: '';
		background-image: url('/images/tan-bg.png');
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
`;

const BottomLayout = styled.div`
	position: relative;
	overflow: hidden;
	padding-top: ${({ noPadding = false }) => (noPadding ? 0 : rem(130))};
	:before {
		content: '';
		background-image: url('/images/tan-bg.png');
		background-size: cover;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
	}

	:after {
		content: '';
		background-color: ${theme.colors.lightTan};
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: ${rem(216)};
		z-index: -1;
	}
`;

const BlogContent = styled.section`
	padding: 0 ${rem(24)};
	@media only screen and (min-width: ${breakpoints.tablet}) {
		max-width: ${rem(1070)};
		margin: 0 auto;
	}
`;

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	column-gap: ${rem(25)};

	> a {
		width: 100%;
		margin-bottom: ${rem(28)};

		:last-child {
			margin-bottom: 0;
		}
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const SearchInput = styled.input`
	border-radius: ${rem(34)};
	border: ${rem(1)} solid ${theme.colors.orange};
	background-color: transparent;
	padding: ${rem(18)};
	font-size: ${rem(15)};
	line-height: ${rem(18)};
	letter-spacing: ${rem(0.15)};
	font-family: ${theme.typography.fonts.primary};
	font-weight: bold;
	color: ${theme.colors.orange};
	margin-bottom: ${rem(15)};

	::placeholder {
		color: ${theme.colors.orange};
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-right: ${rem(24)};
		margin-bottom: 0;
		width: ${rem(299)};
	}
`;

const SelectContainer = styled.div`
	position: relative;
	cursor: none;
	width: 100%;
	:after {
		content: '';
		border-radius: 50%;
		border: ${rem(1)} solid ${theme.colors.orange};
		width: ${rem(32)};
		height: ${rem(32)};
		display: block;
		position: absolute;
		top: ${rem(11)};
		right: ${rem(16)};
		background: url('/images/down-arrow.png') no-repeat;
		background-position-x: 9px;
		background-position-y: 14px;
		z-index: -1;
	}
`;

const Select = styled.select`
	border-radius: ${rem(34)};
	border: ${rem(1)} solid ${theme.colors.orange};
	background-color: transparent;
	padding: ${rem(18)};
	width: ${rem(299)};
	font-size: ${rem(15)};
	line-height: ${rem(18)};
	letter-spacing: ${rem(0.15)};
	font-family: ${theme.typography.fonts.primary};
	font-weight: bold;
	color: ${theme.colors.orange};
	appearance: none;
	cursor: none;
	width: 100%;
`;

const PagerContainer = styled.ul`
	margin: 0;
	padding: ${rem(25)} 0 ${rem(26)} 0;
	display: flex;
	justify-content: center;
	list-style-type: none;

	button {
		background-color: transparent;
		border: 0;
		color: ${theme.colors.gray};
		font-family: ${theme.typography.fonts.secondary};
		font-size: ${rem(11)};
		letter-spacing: ${rem(6.88)};
		line-height: ${rem(13)};
		padding: ${rem(16)};
		cursor: none;
	}

	li.active button {
		font-weight: bold;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding: ${rem(50)} 0 ${rem(77)} 0;
	}
`;

const EmptyBlog = styled('div')`
	width: 100%;
	height: 420px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	margin-bottom: ${rem(20)};
`;

function Blog() {
	const [result] = useQuery({
		query: BlogPageQuery,
	});
	const { newsletterSection, socialSection, testimonialsSection, expertiseSection } =
		getPageData(result) || {};
	const { nodes } = getData('articles', result);
	const normalizedBlogData = normalizeBlogData(nodes);

	return (
		<motion.div {...framerOptions}>
			<PageContent>
				<Nav />
				<BlogContent>
					<Flex
						justifyContent="space-between"
						alignItems={['flex-start', 'flex-start', 'center']}
						mb={[rem(46), rem(46)]}
						flexDirection={['column', 'column', 'row']}
					>
						<Text variant="headingSmall" mt={rem(30)} mb={[rem(22), rem(22), 'initial']}>
							blog
						</Text>
						<Flex
							flexDirection={['column', 'column', 'row']}
							width={['100%', '100%', 'initial']}
						>
							{/* <SearchInput placeholder="search" onChange={handleBlogSearch} />
							<SelectContainer>
								<Select onChange={handleFilterChange}>
									<option value="0">Filter</option>
									<option value="title">Title</option>
									<option value="date">Date</option>
								</Select>
							</SelectContainer> */}
						</Flex>
					</Flex>
					<CardContainer>
						{normalizedBlogData &&
							normalizedBlogData?.map((blog) => <BlogCard key={blog.title} {...blog} />)}
					</CardContainer>
					{!normalizedBlogData && (
						<EmptyBlog>
							<Text variant="headingSmallMobile">Posts coming soon.</Text>
						</EmptyBlog>
					)}
					<PagerContainer>
						{/* <li className="active">
							<button>01</button>
						</li>
						<li>
							<button>02</button>
						</li>
						<li>
							<button>03</button>
						</li> */}
					</PagerContainer>
				</BlogContent>
				<MediaSection {...testimonialsSection} />
				<BottomLayout noPadding>
					<SocialSection {...socialSection} />
				</BottomLayout>
				<SignupSection {...newsletterSection} />
				<Footer />
			</PageContent>
		</motion.div>
	);
}

export async function getStaticProps() {
	const ssrCache = ssrExchange({ isClient: false });
	const client = initUrqlClient(
		{
			url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
			exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
		},
		true
	);

	await client.query(BlogPageQuery).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
			hide: true,
		},
		revalidate: 30,
	};
}

export default withUrqlClient(
	(_) => ({
		url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
	}),
	{ ssr: false, staleWhileRevalidate: true } // Important so we don't wrap our component in getInitialProps
)(Blog);
