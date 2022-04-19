import { Flex } from 'rebass/styled-components';
import PressCard from 'components/common/press-card';
import styled from 'styled-components';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';

const Container = styled.section`
	padding: ${rem(60)} ${rem(22)} ${rem(18)} ${rem(21)};
	max-width: ${rem(1200)};
	margin: 0 auto;

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-top: ${rem(140)};
		padding-bottom: ${rem(76)};
	}
`;

const mockPressData = [
	{
		title: 'architectural digest',
		label: 'Fall 2021  |  Edition 12',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
		link: '/',
		src: '/images/press-1.png',
		logoSrc: '/images/architectural-digest-logo.png',
	},
	{
		title: 'southern living',
		label: 'Fall 2021  |  Edition 12',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
		link: '/',
		src: '/images/press-2.png',
		logoSrc: '/images/southern-living-logo.png',
	},
];

function normalizePressArticles(articles = []) {
	return (
		(articles &&
			articles.length > 0 &&
			articles.map(({ pressRelease, title }) => ({
				title: title || 'New Article',
				label: `${pressRelease?.pressSeason}  |  ${pressRelease?.pressEdition}`,
				description: pressRelease?.pressContent,
				link: pressRelease?.pressLink?.url,
				src:
					pressRelease?.pressFeaturedImage?.sourceUrl ||
					'/images/southern-living-logo.png',
				logoSrc: pressRelease?.pressLogo?.sourceUrl || '/images/southern-living-logo.png',
			}))) ||
		[]
	);
}

export default function PressArticles({ articles = [] }) {
	return (
		<Container>
			<Flex flexDirection="column" margin="0 auto">
				{normalizePressArticles(articles)?.map((press, idx) => (
					<PressCard key={`${press.title}-${idx}`} {...press} />
				))}
			</Flex>
		</Container>
	);
}
