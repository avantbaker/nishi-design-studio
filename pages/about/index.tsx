import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import MediaSection from 'components/sections/media-section';
import StartYourSpace from 'components/sections/start-your-space';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import SimpleHeader from 'components/sections/simple-header';
import TeamSlider from 'components/sections/team-slider';
import MeetTheBoss from 'components/sections/meet-the-boss';
import ImageGrid from 'components/common/image-grid';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import { AboutQuery } from 'lib/urql/queries/pages';
import image from 'next/image';

const HeaderWrap = styled.section`
	background-color: ${theme.colors.lightTan};
	background-image: url('/images/tan-bg.png');
	overflow-x: hidden;
`;

const ContentWrap = styled.div`
	background-color: ${theme.colors.lightTan};
`;
const MiddleWrap = styled.div`
	background-color: ${theme.colors.lightTan};
	background-image: url('/images/tan-bg.png');
	background-size: contain;
	background-position: center;
`;

const OffsetText = styled(Text)`
	margin-left: ${rem(40)};
`;

const TwoColumnOffsetSection = ({
	offsetCaption: caption = 'lorem ipsum dolor',
	offsetContent:
		content = '<p>Our work is where you play. We’ll handle the heavy installations and obsess over the hardware. You kick your feet up and relax. From pouring the concrete, to poring over color swatches, to pouring your first drink in the finished space– we’re with you.</p>\n<p>Our work is where you play. We’ll handle the heavy installations and obsess over the hardware. You kick your feet up and relax. From pouring the concrete, to poring over color swatches, to pouring your first drink in the finished space– we’re with you.</p>\n',
	offsetLine1: line1 = 'about',
	offsetLine2: line2 = 'the brand',
}) => {
	return (
		<Flex
			maxWidth={rem(1076)}
			m="0 auto"
			flexDirection={['column', 'column', 'row']}
			p={`${rem(88)} ${rem(24)} ${rem(91)} ${rem(24)}`}
		>
			<Box width={[1, 1, 1 / 2]}>
				<Text variant="highlight" mb={[rem(14), rem(14)]}>
					{caption}
				</Text>
				<Flex flexDirection="column" mb={(rem(32), rem(32))}>
					<Text variant={['headingMobile', 'headingMobile', 'heading']}>{line1}</Text>
					<OffsetText variant={['headingMobile', 'headingMobile', 'heading']}>
						{line2}
					</OffsetText>
				</Flex>
			</Box>
			<Box width={[1, 1, 1 / 2]}>
				<Text variant="body" dangerouslySetInnerHTML={{ __html: content }} />
			</Box>
		</Flex>
	);
};

const FullWidthFlex = styled(Flex)`
	width: 100%;
	> div {
		width: 100%;
	}
`;
function About() {
	const [result] = useQuery({
		query: AboutQuery,
	});

	const {
		simpleHeader,
		imageGallery,
		startYourSpace,
		teamSection,
		testimonialsSection,
		twoColumnImageOverlay,
		twoColumnOffsetSection,
	} = result?.data?.page;

	const { nodes } = result?.data?.teamMembers;
	const { imageSections } = imageGallery;

	const firstSection = imageSections?.[0];

	return (
		<motion.div {...framerOptions}>
			<HeaderWrap>
				<Nav />
				<SimpleHeader {...simpleHeader} />
			</HeaderWrap>
			<MediaSection {...testimonialsSection} />
			<MiddleWrap>
				<MeetTheBoss {...twoColumnImageOverlay} />
				<TeamSlider {...teamSection} images={nodes} />
			</MiddleWrap>
			<ContentWrap>
				<TwoColumnOffsetSection {...twoColumnOffsetSection} />
				<FullWidthFlex px={['initial', 'initial', rem(28), rem(28)]} pb={rem(86)}>
					<ImageGrid images={firstSection?.images || []} />
				</FullWidthFlex>
			</ContentWrap>
			<StartYourSpace {...startYourSpace} />
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

	await client.query(AboutQuery).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
			hide: true,
		},
		revalidate: 30,
	};
}

const Placeholder = () => <div></div>;

export default withUrqlClient(
	(_) => ({
		url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
	}),
	{ ssr: false, staleWhileRevalidate: true } // Important so we don't wrap our component in getInitialProps
)(About);
