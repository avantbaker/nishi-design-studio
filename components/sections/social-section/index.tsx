import styled from 'styled-components';
import Link from 'next/link';
import { Flex } from 'rebass/styled-components';
import ImageGrid from 'components/common/image-grid';
import Text from 'components/common/text';
import { breakpoints, queries } from 'styles/media';
import Instagram from 'components/common/icons/instagram';
import { SecondaryButton } from 'components/common/button';
import { rem } from 'polished';

const Container = styled.section`
	padding-bottom: ${rem(38)};

	.insta-link {
		padding-bottom: ${rem(21)};
	}

	@media only screen and (min-width: ${breakpoints.mobileLarge}) {
		padding: 0 ${rem(24)} ${rem(38)} ${rem(24)};
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding-bottom: ${rem(94)};

		.insta-link {
			margin-bottom: ${rem(23)};
		}
	}
`;

const DEFAULT_IMAGES = [
	{
		imgixUrl: {
			url: 'https://nishidesignstudio.imgix.net/something-masculine/2.jpg',
		},
		width: 342,
		height: 452,
	},
	{
		imgixUrl: {
			url: 'https://nishidesignstudio.imgix.net/something-grand/11.jpg',
		},
		width: 342,
		height: 226,
	},
	{
		imgixUrl: {
			url: 'https://nishidesignstudio.imgix.net/something-grand/2.jpg',
		},
		width: 342,
		height: 452,
	},
	{
		imgixUrl: {
			url: 'https://nishidesignstudio.imgix.net/something-socal/27.jpg',
		},
		width: 342,
		height: 323,
	},
	{
		imgixUrl: {
			url: 'https://nishidesignstudio.imgix.net/something-socal/9.jpg',
		},
		width: 342,
		height: 549,
	},
	{
		imgixUrl: {
			url: 'https://nishidesignstudio.imgix.net/something-hollywood/3.jpg',
		},
		width: 342,
		height: 323,
	},
];

export default function SocialSection({
	useDefaults = false,
	socialTitle: title,
	socialLinkUrl: link,
	socialImages: images,
}) {
	return (
		<Container>
			<Flex flexDirection="column" alignItems="center" mt={rem(128)}>
				<Text mb={rem(30)} variant="highlight">
					{title}
				</Text>
				<Link href="https://www.instagram.com/nishidesignstudio/">
					<a className="insta-link" target="_blank">
						<Instagram />
					</a>
				</Link>
			</Flex>
			<ImageGrid images={images} defaults={useDefaults && DEFAULT_IMAGES} />
			<a className="insta-link" target="_blank">
				<SecondaryButton mt={[rem(16), rem(16), rem(10)]} ml="auto" mr="auto" large>
					{link?.title}
				</SecondaryButton>
			</a>
		</Container>
	);
}
