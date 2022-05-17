import { Flex, Box } from 'rebass/styled-components';
import Footer from 'components/common/footer';
import Nav from 'components/common/nav';
import Text from 'components/common/text';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { AboutQuery, LegalPageQuery } from 'lib/urql/queries/pages';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import { getPageData } from 'lib/utils';

const PageContent = styled.div`
	background-color: ${theme.colors.lightTan};
`;

const Container = styled.section`
	padding: ${rem(2)} ${rem(28)} 0 ${rem(28)};
	max-width: ${rem(1042)};
	margin: 0 auto;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-top: ${rem(40)};
	}
`;

const LegalText = styled(Text)`
	[data-custom-class='body'] {
		div {
			margin-bottom: ${rem(24)};
		}
	}
`;

function Legal() {
	const [results] = useQuery({
		query: LegalPageQuery,
	});

	const { legal, title } = getPageData(results);

	const {
		legalCaptionLine1: line1,
		legalCaptionLine2: line2,
		legalPrivacyContentCopy: privacyContent,
		legalPrivacyTitle: privacyTitle,
		legalTermsAndConditionsContent: tncContent,
		legalTermsAndConditionsTitle: tncTitle,
	} = legal;

	return (
		<motion.div {...framerOptions}>
			<PageContent>
				<Nav />
				<Container>
					<Flex
						width={[1, 1, rem(271)]}
						justifyContent="space-between"
						mb={[rem(16), rem(16), rem(35)]}
					>
						<Text variant="bodySmall" color={theme.colors.gray}>
							{line1}
						</Text>
						<Text variant="bodySmall" color={theme.colors.gray}>
							{line2}
						</Text>
					</Flex>
					<Text
						mb={[rem(45), rem(45), rem(71)]}
						variant="headingSmall"
						color={theme.colors.gray}
					>
						{title}
					</Text>
					<Flex
						flexDirection={['column', 'column', 'row']}
						mb={[rem(53), rem(53), rem(71)]}
					>
						<Box width={[1, 1, 1 / 4]}>
							<Text mb={[rem(17), rem(17)]} variant="highlight">
								{tncTitle}
							</Text>
						</Box>
						<Box width={[1, 1, 3 / 4]}>
							<LegalText
								variant="body"
								dangerouslySetInnerHTML={{ __html: tncContent }}
							/>
						</Box>
					</Flex>
					<Flex flexDirection={['column', 'column', 'row']}>
						<Box width={[1, 1, 1 / 4]}>
							<Text mb={[rem(17), rem(17)]} variant="highlight">
								{privacyTitle}
							</Text>
						</Box>
						<Box width={[1, 1, 3 / 4]}>
							<LegalText
								variant="body"
								dangerouslySetInnerHTML={{ __html: privacyContent }}
							/>
						</Box>
					</Flex>
				</Container>
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

	await client.query(LegalPageQuery).toPromise();

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
)(Legal);
