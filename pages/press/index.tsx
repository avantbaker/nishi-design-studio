import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Footer from 'components/common/footer';
import BrandsParters from 'components/sections/brands-partners';
import styled from 'styled-components';
import PressHeader from 'components/sections/press-header';
import PressArticles from 'components/sections/press-articles';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import { PressPageQuery } from 'lib/urql/queries/pages';
import { getPageData, getData } from 'lib/utils';

const PageContent = styled.section`
	background-color: ${theme.colors.lightTan};
`;

function Press() {
	const [result] = useQuery({
		query: PressPageQuery,
	});

	const { pressReleaseHero } = getPageData(result) || {};

	const { nodes } = getData('pressReleases', result) || {};

	return (
		<motion.div {...framerOptions}>
			<PageContent>
				<Nav />
				<PressHeader {...pressReleaseHero} />
				<PressArticles articles={nodes} />
				<Footer noPadding />
			</PageContent>
		</motion.div>
	);
}

export async function getServerSideProps() {
	const ssrCache = ssrExchange({ isClient: false });
	const client = initUrqlClient(
		{
			url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
			exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
		},
		true
	);

	await client.query(PressPageQuery).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
			revalidate: 600,
		},
	};
}

export default withUrqlClient(
	(_) => ({
		url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
	}),
	{ ssr: false } // Important so we don't wrap our component in getInitialProps
)(Press);
