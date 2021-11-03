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

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-bottom: ${rem(94)};
  }
`;

export default function SocialSection() {
  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        <Text mb={rem(30)} variant="highlight">
          LET&apos;S BE SOCIAL
        </Text>
        <Link href="https://www.instagram.com/nishidesignstudio/">
          <a className="insta-link" target="_blank">
            <Instagram />
          </a>
        </Link>
      </Flex>
      <ImageGrid />
      <SecondaryButton
        m={[
          `${rem(16)} auto 0 auto`,
          `${rem(16)} auto 0 auto`,
          `${rem(10)} auto 0 auto`,
        ]}
        large
      >
        follow us
      </SecondaryButton>
    </Container>
  );
}