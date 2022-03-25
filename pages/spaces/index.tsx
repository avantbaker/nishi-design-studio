import theme from 'styles/theme';
import Nav from 'components/common/nav';
import { Flex } from 'rebass/styled-components';
import Footer from 'components/common/footer';
import styled from 'styled-components';
import { rem } from 'polished';
import { breakpoints } from 'styles/media';
import StartYourSpace from 'components/sections/start-your-space';
import ResidentialSection from 'components/sections/residential-section';
import HeroSlider from 'components/common/hero-slider';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { cacheExchange, dedupExchange, fetchExchange, ssrExchange, useQuery } from 'urql';
import { useCallback, useEffect, useState } from 'react';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { SpacesQuery } from 'lib/urql/queries/pages';
import { buildPostQueryByCategory } from 'lib/utils';
import { getPageData } from 'lib/utils';

const PageContent = styled.div`
	position: relative;
	overflow: hidden;
	:before {
		content: '';
		background-image: url('/images/tan-bg.png');
		background-size: contain;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
`;

const StartYourSpaceTan = styled(StartYourSpace)`
	background-color: ${theme.colors.lightTan};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-top: ${rem(121)};
	}
`;

export enum Categories {
	commercial = 'commercial',
	residential = 'residential',
	all = 'all',
}

function getPostsData(result) {
	if (!result || !result.data) return result;
	return result.data?.posts?.nodes || [];
}

function Residential() {
	const [postData, setPostData] = useState([]);
	const [category, setCategory] = useState(Categories.all);

	const [results] = useQuery({
		query: SpacesQuery,
	});

	const { heroSlider, startYourSpace } = getPageData(results);

	const [resultsResidential, fetchResidentialPosts] = useQuery({
		query: buildPostQueryByCategory(Categories.residential),
		pause: true,
	});
	const [resultsAll, fetchAllPosts] = useQuery({
		query: buildPostQueryByCategory(),
		pause: true,
	});
	const [resultsCommercial, fetchCommercialPosts] = useQuery({
		query: buildPostQueryByCategory(Categories.commercial),
		pause: true,
	});

	const handleCategoryClick = useCallback(
		(category) => {
			switch (category) {
				case Categories.residential:
					fetchResidentialPosts();
					setCategory(category);
					return;
				case Categories.commercial:
					fetchCommercialPosts();
					setCategory(category);
					return;
				default:
					fetchAllPosts();
					setCategory(Categories.all);
					return;
			}
		},
		[category]
	);

	useEffect(() => {
		fetchAllPosts();
	}, []);

	useEffect(() => {
		if (category === Categories.all) {
			setPostData(getPostsData(resultsAll));
		} else if (category === Categories.residential) {
			setPostData(getPostsData(resultsResidential));
		} else if (category === Categories.commercial) {
			setPostData(getPostsData(resultsCommercial));
		}
	}, [category, resultsAll, resultsResidential, resultsCommercial]);

	return (
		<motion.div {...framerOptions}>
			<Nav />
			<PageContent>
				<HeroSlider {...heroSlider} handleCategoryClick={handleCategoryClick} />
				<Flex justifyContent="center">
					<ResidentialSection title={category} posts={postData} />
				</Flex>
				<StartYourSpaceTan {...startYourSpace} />
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

	await client.query(SpacesQuery).toPromise();
	await client.query(buildPostQueryByCategory(Categories.residential)).toPromise();
	await client.query(buildPostQueryByCategory(Categories.commercial)).toPromise();
	await client.query(buildPostQueryByCategory()).toPromise();

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
	{ ssr: false, staleWhileRevalidate: true } // Important so we don't wrap our component in getInitialProps
)(Residential);
