import styled from 'styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import SpaceCard, { SpaceCardBig } from 'components/common/space-card';
import { PrimaryButton } from 'components/common/button';
import { breakpoints } from 'styles/media';
import { mockSpacesData } from 'pages/api/mocks';
import { normalizePosts, normalizeSpaces } from 'components/common/hero-slider/utils';
import theme from 'styles/theme';

const Container = styled.div`
	padding: ${rem(50)} ${rem(20)} ${rem(113)} 0;
	width: 100%;
	${PrimaryButton} {
		display: none;
	}
	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding: ${rem(50)} 0 ${rem(203)} 0;
		${PrimaryButton} {
			display: block;
			width: ${rem(274)};
			margin: 0 auto;
		}
	}
	@media only screen and (min-width: ${breakpoints.laptop}) {
		padding: ${rem(50)} 0 ${rem(203)} ${rem(40)};
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
		max-width: 1440px;
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
						pl={rem(20)}
						variant={['headingMobile', 'headingMobile', 'heading']}
					>
						{title} spaces
					</Text>
					{normalizePosts(posts).map((space) => {
						return <SpaceCardBig key={space.title} {...space} />;
					})}
				</ContentWrap>
				{posts.length > 5 && <PrimaryButton large>load more</PrimaryButton>}
			</Container>
		)
	);
}
