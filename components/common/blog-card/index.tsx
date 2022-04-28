import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';
import Image from 'next/image';
import Text from 'components/common/text';
import { Flex } from 'rebass/styled-components';
import { SecondaryButton } from 'components/common/button';
import { breakpoints } from 'styles/media';
import theme from 'styles/theme';
import ChopLines from 'chop-lines';

const AnchorContainer = styled.a`
	:hover img {
		transform: scale(1.05);
	}
`;

const ImageWrap = styled.div`
	position: relative;
	height: ${rem(164)};
	width: 100%;

  img {
    object-fit: cover;
		transition transform 0.5s ease-in-out;
  }

	@media only screen and (min-width: ${breakpoints.tablet}) {
		height: ${rem(250)};
	}
`;

const TextContent = styled.div`
	padding: ${rem(26)} ${rem(26)} ${rem(13)} ${rem(26)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		padding: ${rem(31)} ${rem(26)} ${rem(13)} ${rem(26)};
	}
`;

const StyledButton = styled(SecondaryButton)`
	padding-left: 0;
	@media only screen and (min-width: ${breakpoints.tablet}) {
		${SecondaryButton} {
			padding-left: auto;
		}
	}
`;

export default function BlogCard({ title, date, description, slug, tags, src, ...rest }) {
	const dateObj = new Date(date);
	const dateString = `${dateObj.getMonth()}.${dateObj.getDate()}.${dateObj.getFullYear()}`;
	return (
		<Link href={`/blog/${slug}`} passHref>
			<AnchorContainer {...rest}>
				<Flex backgroundColor="#fff" flexDirection="column">
					<ImageWrap>
						<Image quality="100" alt={title} src={src} layout="fill" />
					</ImageWrap>
					<TextContent>
						<Text variant="headingSmallMobile" mb={[rem(5), rem(5), rem(5)]}>
							{title}
						</Text>
						<Text
							variant="bodySmall"
							color={theme.colors.gray}
							mb={[rem(10), rem(10), rem(5)]}
						>
							{dateString}
						</Text>
						<ChopLines maxHeight={95}>
							<Text
								variant="body"
								color={theme.colors.textGray}
								mb={[rem(41), rem(41), rem(47)]}
								dangerouslySetInnerHTML={{ __html: description }}
							/>
						</ChopLines>
						<Flex
							flexDirection={['column', 'column', 'row']}
							alignItems={['flex-start', 'flex-start', 'center']}
							justifyContent="space-between"
							mt="auto"
							mb={0}
						>
							<Text
								variant="bodySmall"
								color={theme.colors.gray}
								mb={[rem(6), rem(6), null]}
							>
								{tags.map((tag, i) => `${tag.name} ${i < tags.length - 1 ? '| ' : ''}`)}
							</Text>
							<StyledButton>read article</StyledButton>
						</Flex>
					</TextContent>
				</Flex>
			</AnchorContainer>
		</Link>
	);
}
