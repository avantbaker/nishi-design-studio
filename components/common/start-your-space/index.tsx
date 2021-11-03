import Link from 'next/link';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import styled from 'styled-components';
import Text from 'components/common/text';
import { PrimaryButton } from 'components/common/button';

const Container = styled.section`
  padding: ${rem(54)} ${rem(20)} ${rem(86)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  a {
    margin-bottom: ${rem(6)};
  }

  button {
    width: ${rem(274)};
    margin: 0 auto;
  }

  img {
    width: ${rem(72)};
    @media only screen and (min-width: ${breakpoints.tablet}) {
      width: ${rem(110)};
    }
  }
`;

export default function StartYourSpace() {
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <img
            alt="LOGO NISHI design+studio"
            className="logoImg"
            src="/images/nishi-slate.png"
          />
        </a>
      </Link>
      <Text
        mb={[rem(16), rem(29)]}
        width={[rem(250), rem(250), 'auto']}
        variant={['headingMobile', 'headingMobile', 'heading']}
      >
        start your space.
      </Text>
      <Text
        maxWidth={rem(554)}
        mb={[rem(25), rem(25)]}
        variant={['body', 'body', 'bodyLarge']}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper
        odio eunum dignissim porta.
      </Text>
      <PrimaryButton large>start a project</PrimaryButton>
    </Container>
  );
}
