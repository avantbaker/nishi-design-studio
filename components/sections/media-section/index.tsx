import styled from 'styled-components';
import Link from 'next/link';
import theme from 'styles/theme';
import Image from 'next/image';
import { Flex } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import { SecondaryButton } from 'components/common/button';
import { breakpoints } from 'styles/media';

const Container = styled.section`
  background-color: ${theme.colors.lightOrange};
  padding: ${rem(61)} ${rem(22)} ${rem(20)} ${rem(24)};

  .heading {
    white-space: nowrap;
    font-family: ${theme.typography.fonts.primary};
    font-weight: bold;
  }

  a {
    margin-left: auto;
    margin-right: 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: ${rem(83)} ${rem(130)} ${rem(39)} ${rem(184)};
    .heading {
      margin-left: -${rem(45)};
    }

    button {
      margin-left: ${rem(30)};
    }
  }
`;

export default function MediaSection() {
  return (
    <Container>
      <Text
        width={[rem(230), rem(230), 'initial']}
        color="#fff"
        mb={[rem(32), rem(32), rem(46)]}
        variant="highlight"
      >
        NISHI DESIGN + STUDIO / PRESS
      </Text>
      <Text
        className="heading"
        mb={[rem(55), rem(55), rem(78)]}
        variant="heading"
        color={theme.colors.orange}
      >
        “Their work is stunning. They’re not bound by trends
      </Text>

      <Flex flexDirection={['column', 'column', 'row']}>
        <Image
          alt="Nishi"
          width="696px"
          height="158px"
          src="/images/press-logos.jpg"
        />
        <Link href="/press">
          <a>
            <SecondaryButton color="#fff">all press</SecondaryButton>
          </a>
        </Link>
      </Flex>
    </Container>
  );
}
