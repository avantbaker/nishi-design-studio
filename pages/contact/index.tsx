import { breakpoints } from 'styles/media';
import theme from 'styles/theme';
import Nav from 'components/common/nav';
import Text from 'components/common/text';
import Footer from 'components/common/footer';
import StartYourSpace from 'components/sections/start-your-space';
import FormSection from 'components/sections/form-section';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { rem } from 'polished';
import SocialSection from 'components/sections/social-section';
import SignupSection from 'components/sections/signup-section';
import VendorsContractors from 'components/sections/vendors-contractors';
import Designers from 'components/sections/designers';
import { PrimaryButton } from 'components/common/button';
import { motion } from 'framer-motion';
import { framerOptions } from 'lib/framer';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import { ContactPageQuery } from 'lib/urql/queries/pages';
import { start } from 'repl';

const HeaderWrap = styled.div`
	background-color: ${theme.colors.lightTan};
`;

const PageBackground = styled.div`
	background-image: url('/images/contact-bg.png');
	background-size: contain;
`;

const PageContent = styled.div`
	max-width: ${rem(1123)};
	margin: 0 auto;
	padding: 0 ${rem(28)};

	${PrimaryButton} {
		width: ${rem(274)};
	}

	.ty-text {
		margin-bottom: ${rem(62)};
	}

	@media only screen and (max-width: ${breakpoints.tablet}) {
		.ty-text {
			font-size: ${rem(25)};
			line-height: ${rem(30)};
			letter-spacing: normal;
			max-width: ${rem(232)};
			margin-bottom: ${rem(15)};
		}
	}
`;

const ContactHeader = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${rem(4)} ${rem(28)} ${rem(28)} ${rem(28)};
	max-width: ${rem(1123)};
	margin: 0 auto;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		align-items: flex-end;
		padding-bottom: ${rem(44)};
		margin-top: ${rem(49)};
	}
`;

const FormHeader = styled(Flex)`
	flex-direction: column;
	padding-top: ${rem(62)};
	margin-bottom: ${rem(103)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		margin-bottom: ${rem(52)};
	}
`;

const BottomLayout = styled.div`
	position: relative;
	overflow: hidden;
	background-color: ${theme.colors.lightTan};
`;

function ContactHeaderContainer({
	simplebannercontent:
		content = '<p><span style="font-weight: 400;">Introducing designers to the project before the walls start coming down or going up is crucial. Our process both informs and is informed by the architecture and construction of the space. Reach out sooner than you’d think!</span></p>\n',
	simplebannercontentsubtitle: contentSubtitle = 'OUR INTAKE PROCESS',
	simplebannersubtitle: subtitle = 'ready to begin a project?',
	simplebannertitle: title = 'get in touch',
}) {
	return (
		<ContactHeader>
			<Flex mb={[rem(40), rem(40), 'initial']} flexDirection="column">
				<Text mb={rem(14)} variant="bodySmall" color={theme.colors.gray}>
					{subtitle}
				</Text>
				<Text variant="headingSmall" color={theme.colors.gray}>
					{title}
				</Text>
			</Flex>
			<Flex
				flexDirection="column"
				maxWidth={[rem(240), rem(240), rem(330)]}
				ml="auto"
				textAlign="right"
			>
				<Text mb={rem(12)} variant="highlight">
					{contentSubtitle}
				</Text>
				<Text
					variant="bodySmall"
					color={theme.colors.textGray}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</Flex>
		</ContactHeader>
	);
}

function FormHeaderContainer({
	titletwocolcontent:
		content = '<p><span style="font-weight: 400;">Our consultation consists of an in-space visit, comprehensive budget breakdown, and creative exploration in moodboards to begin realizing the space’s’ potential and setting expectations based on budget. </span></p>\n<p><b>* $800 consultation fee</b></p>\n',
	titletwocolsubtitle: subtitle = 'THE CONSULTATION',
	titletwocoltitle: title = 'start today',
}) {
	return (
		<FormHeader>
			<Box width={[1, 1, 1 / 2]} mb={[rem(35), rem(35), rem(40)]}>
				<Text variant={['headingMobile', 'headingMobile', 'heading']}>{title}</Text>
			</Box>
			<Box width={[1, 1, 1 / 2]} mt={['initial', 'initial', rem(16)]}>
				<Text variant="highlight" mb={[rem(16), rem(16), rem(24)]}>
					{subtitle}
				</Text>
				<Text
					variant="body"
					mb={[rem(24), rem(24)]}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</Box>
		</FormHeader>
	);
}

function ContactFormFooterContainer({
	contactbannertext: bannerText = 'thank you for taking the time to fill this form out.',
	contactintrotext:
		introText = 'If you have submitted the above form and feel confident that you’re ready to begin a project with Nishi Design + Studio, you can then book an intro call with Nishi.',
}) {
	return (
		<Flex flexDirection="column" textAlign="center" alignItems="center">
			<Text variant="heading" className="ty-text">
				{bannerText}
			</Text>
			<PrimaryButton mb={rem(62)} large>
				submit form
			</PrimaryButton>
			<Text variant="body" mb={[rem(20), rem(20), rem(24)]} maxWidth={rem(764)}>
				{introText}
			</Text>
			<PrimaryButton mb={rem(77)} large>
				book an intro call
			</PrimaryButton>
		</Flex>
	);
}

function Contact() {
	const [result] = useQuery({
		query: ContactPageQuery,
	});

	const {
		simpleBanner,
		contactFormFooter,
		titleTwoColumn,
		vendors,
		designers,
		startYourSpace,
		socialSection,
		newsletterSection,
	} = result?.data?.page;

	return (
		<motion.div {...framerOptions}>
			<HeaderWrap>
				<Nav />
				<ContactHeaderContainer {...simpleBanner} />
			</HeaderWrap>
			<PageBackground>
				<PageContent>
					<FormHeaderContainer {...titleTwoColumn} />
					<FormSection />
					<ContactFormFooterContainer {...contactFormFooter} />
				</PageContent>
			</PageBackground>
			<VendorsContractors {...vendors} />
			<Designers {...designers} />
			<BottomLayout>
				<StartYourSpace {...startYourSpace} />
				<SocialSection {...socialSection} />
			</BottomLayout>
			<SignupSection {...newsletterSection} />
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

	await client.query(ContactPageQuery).toPromise();

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
	{ ssr: false, staleWhileRevalidate: true } // Important so we don't wrap our component in getInitialProps
)(Contact);
