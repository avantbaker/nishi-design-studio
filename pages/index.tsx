import ExpertiseCards from 'components/common/expertise-cards';
import Footer from 'components/common/footer';
import Nav from 'components/common/nav';
import MediaSection from 'components/sections/media-section';
import SignupSection from 'components/sections/signup-section';
import SliderSection from 'components/sections/slider-section';
import SocialSection from 'components/sections/social-section';
import StartYourSpace from 'components/sections/start-your-space';
import YourSpace from 'components/sections/your-space';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { HomepageQuery } from 'lib/urql/queries/pages';
import { getPageData } from 'lib/utils';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { rem } from 'polished';
import styled from 'styled-components';
import { breakpoints } from 'styles/media';
import theme from 'styles/theme';
import { cacheExchange, dedupExchange, fetchExchange, ssrExchange, useQuery } from 'urql';
import ComingSoon from './comingsoon';

export const TopSection = styled.section`
	position: relative;
	overflow: hidden;
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

	@media only screen and (min-width: ${breakpoints.tablet}) {
		:before {
			background-size: cover;
		}
	}
`;

const BottomLayout = styled.div`
	position: relative;
	overflow: hidden;
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

function Home() {
	const showComingSoon = true;
	const [result] = useQuery({
		query: HomepageQuery,
	});

	if (showComingSoon) {
		return <ComingSoon />;
	}

	const {
		heroSlider,
		twoColumnTextSection,
		startYourSpace,
		socialSection,
		newsletterSection,
		expertiseSection,
	} = getPageData(result) || {};

	const slides = heroSlider?.slides;
	const showSliderSection = slides && slides.length > 0;
	return (
		<motion.div {...framerOptions}>
			{/* <TopSection>
				<Nav />
				{showSliderSection && <SliderSection {...heroSlider} />}
			</TopSection>
			<YourSpace {...twoColumnTextSection} />
			<ExpertiseCards {...expertiseSection} />
			<BottomLayout>
				<StartYourSpace {...startYourSpace} />
				<SocialSection {...socialSection} />
			</BottomLayout>
			{newsletterSection && <SignupSection {...newsletterSection} />}
			<Footer /> */}
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

	await client.query(HomepageQuery).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
		},
		revalidate: 10,
	};
}

export default withUrqlClient(
	(_) => ({
		url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
	}),
	{ ssr: false, staleWhileRevalidate: true } // Important so we don't wrap our component in getInitialProps
)(Home);
