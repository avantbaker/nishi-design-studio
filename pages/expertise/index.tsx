import theme from 'styles/theme';
import Nav from 'components/common/nav';
import styled from 'styled-components';
import { rem } from 'polished';
import ExpertisePageContent from 'components/sections/expertise-page-content';
import StartYourSpace from 'components/sections/start-your-space';
import OurSpacesSlider from 'components/sections/our-spaces';
import DarkSlider from 'components/common/dark-slider';
import Footer from 'components/common/footer';
import SimpleHeader from 'components/sections/simple-header';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import { ExpertiseQuery } from 'lib/urql/queries/pages';

const PageContent = styled.section`
	background-color: ${theme.colors.lightTan};
	background-image: url('/images/tan-bg.png');
	overflow-x: hidden;
`;

const HeaderWrap = styled.div`
	margin-bottom: ${rem(56)};
`;

function Expertise() {
	const [result] = useQuery({
		query: ExpertiseQuery,
	});

	console.log('Expertise Result: ', result);

	return (
		<motion.div {...framerOptions}>
			<PageContent>
				<HeaderWrap>
					<Nav />
					<SimpleHeader
						src="/images/poodle-header-image.png"
						title="every step"
						subTitle="we're there for"
					/>
				</HeaderWrap>
				<ExpertisePageContent />
				<DarkSlider />
				<OurSpacesSlider />
				<StartYourSpace hasLogo hasLargeLogo />
				<Footer />
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

	await client.query(ExpertiseQuery).toPromise();

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
)(Expertise);
