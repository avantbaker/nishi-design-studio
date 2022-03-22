import styled from 'styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import SpaceCard from 'components/common/space-card';
import { PrimaryButton } from 'components/common/button';
import { breakpoints } from 'styles/media';
import { mockSpacesData } from 'pages/api/mocks';
import { normalizePosts, normalizeSpaces } from 'components/common/hero-slider/utils';

const Container = styled.div`
	padding: 0 ${rem(20)} ${rem(113)} ${rem(20)};

	${PrimaryButton} {
		display: none;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding: 0 0 ${rem(203)} ${rem(20)};

		${PrimaryButton} {
			display: block;
			width: ${rem(274)};
			margin: 0 auto;
		}
	}
`;

const ContentWrap = styled.section`
	display: flex;
	flex-direction: column;

	${Text} {
		text-indent: -${rem(20)};
		margin-left: ${rem(20)};
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		max-width: 1300px;
		margin-right: 0;
		margin-left: auto;

		${Text} {
			text-indent: 0;
			margin-left: 0;
		}
	}
`;

export default function ResidentialSection({ posts = [], title }) {
	return (
		posts &&
		posts.length > 0 && (
			<Container>
				<ContentWrap>
					<Text
						mb={[rem(41), rem(41), rem(89)]}
						variant={['headingMobile', 'headingMobile', 'heading']}
					>
						{title} spaces
					</Text>
					{normalizePosts(posts).map((space) => {
						return <SpaceCard key={space.title} {...space} />;
					})}
				</ContentWrap>
				<PrimaryButton large>load more</PrimaryButton>
			</Container>
		)
	);
}
