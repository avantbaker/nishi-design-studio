import { breakpoints } from 'styles/media';
import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Footer from 'components/common/footer';
import styled from 'styled-components';
import { rem } from 'polished';
import SliderSection from 'components/sections/slider-section';
import SocialSection from 'components/sections/social-section';
import SignupSection from 'components/sections/signup-section';
import StartYourSpace from 'components/sections/start-your-space';
import ExpertiseSection from 'components/sections/expertise-section';
import MediaSection from 'components/sections/media-section';
import YourSpace from 'components/sections/your-space';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { cacheExchange, dedupExchange, fetchExchange, ssrExchange, useQuery } from 'urql';
import { HomepageQuery } from 'lib/urql/queries/pages';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { getPageData } from 'lib/utils';

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
	const [result] = useQuery({
		query: HomepageQuery,
	});
	const {
		heroSlider,
		twoColumnTextSection,
		expertiseSection,
		testimonialsSection,
		startYourSpace,
		socialSection,
		newsletterSection,
	} = getPageData(result) || {};

	const categories = expertiseSection?.categories;
	const slides = heroSlider?.slides;
	const showExpertiseSection = categories && categories.length > 0;
	const showSliderSection = slides && slides.length > 0;

	return (
		<motion.div {...framerOptions}>
			<TopSection>
				<Nav />
				{showSliderSection && <SliderSection {...heroSlider} />}
				<YourSpace {...twoColumnTextSection} />
			</TopSection>
			{showExpertiseSection && <ExpertiseSection {...expertiseSection} />}
			<MediaSection {...testimonialsSection} />
			<BottomLayout>
				<StartYourSpace {...startYourSpace} />
				<SocialSection {...socialSection} />
			</BottomLayout>
			{newsletterSection && <SignupSection {...newsletterSection} />}
			<Footer />
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
