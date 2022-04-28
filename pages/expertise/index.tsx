import DarkSlider from 'components/common/dark-slider';
import ExpertiseCards from 'components/common/expertise-cards';
import Footer from 'components/common/footer';
import Nav from 'components/common/nav';
import OurSpacesSlider from 'components/sections/our-spaces';
import SimpleHeader from 'components/sections/simple-header';
import StartYourSpace from 'components/sections/start-your-space';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { ExpertiseQuery } from 'lib/urql/queries/pages';
import { getPageData } from 'lib/utils';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { rem } from 'polished';
import styled from 'styled-components';
import theme from 'styles/theme';
import { cacheExchange, dedupExchange, fetchExchange, ssrExchange, useQuery } from 'urql';

const PageContent = styled.section`
	background-color: ${theme.colors.lightTan};
	background-image: url('/images/tan-bg.png');
	background-size: contain;
	background-position: center;
	overflow-x: hidden;
`;

const HeaderWrap = styled.div`
	// margin-bottom: ${rem(56)};
`;

function Expertise() {
	const [result] = useQuery({
		query: ExpertiseQuery,
	});

	const { simpleHeader, processSlider, startYourSpace, expertiseSection } =
		getPageData(result) || {};
	const { nodes } = result?.data?.posts || {};
	return (
		<motion.div {...framerOptions}>
			<PageContent>
				<HeaderWrap>
					<Nav />
					<SimpleHeader {...simpleHeader} />
				</HeaderWrap>
				<ExpertiseCards {...expertiseSection} hasLogo={false} />
				<DarkSlider {...processSlider} />
				<OurSpacesSlider spaces={nodes} />
				<StartYourSpace {...startYourSpace} />
				<Footer />
			</PageContent>
		</motion.div>
	);
}

export async function getStaticProps(ctx) {
	const ssrCache = ssrExchange({ isClient: false });
	const client = initUrqlClient(
		{
			url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
			exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
		},
		true
	);

	await client.query(ExpertiseQuery).toPromise();

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
)(Expertise);
