import styled from 'styled-components';
import theme from 'styles/theme';
import { rem } from 'polished';
import Nav from 'components/common/nav';
import Footer from 'components/common/footer';
import Text from 'components/common/text';
import { breakpoints } from 'styles/media';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import { For0ForPageQuery, HomepageQuery } from 'lib/urql/queries/pages';

const PageContainer = styled.section`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;
const Container = styled.div`
	background-color: ${theme.colors.lightOrange};
	// overflow: auto;
	flex-grow: 1;
	height: 100vh;

	.heading {
		word-break: break-word;
		width: 100%;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		height: auto;
		.heading {
			width: 100%;
		}
	}
`;

const TextContent = styled.div`
	padding: 0 ${rem(45)} 0 ${rem(29)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-left: ${rem(186)};
		padding-top: ${rem(42)};
		width: ${rem(549)};
	}
`;

function ErrorPage() {
	const [result] = useQuery({
		query: For0ForPageQuery,
	});
	const { page } = result?.data || {};

	const { forOfor } = page || {};

	return (
		<motion.div {...framerOptions}>
			<PageContainer>
				<Container>
					<Nav />
					<TextContent>
						<Text variant="highlight" color="#fff" mb={[rem(15), rem(15), rem(39)]}>
							{forOfor?.caption || ''}
						</Text>
						<Text
							fontFamily={theme.typography.fonts.primary}
							variant="heading"
							className="heading"
							fontWeight="bold"
							mb={[rem(33), rem(33), rem(40)]}
							color={theme.colors.orange}
							wordBreak="break-word"
						>
							{forOfor?.title || ''}
						</Text>
						<Text
							variant="body"
							mb={[rem(83), rem(83), rem(162)]}
							color="#fff"
							dangerouslySetInnerHTML={{ __html: forOfor?.content }}
						/>
					</TextContent>
				</Container>
				<Footer noPadding />
			</PageContainer>
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

	await client.query(For0ForPageQuery).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
		},
		revalidate: 30,
	};
}

export default withUrqlClient(
	(_) => ({
		url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
	}),
	{ ssr: false } // Important so we don't wrap our component in getInitialProps
)(ErrorPage);
