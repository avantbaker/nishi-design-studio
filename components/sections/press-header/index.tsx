import { Flex, Box } from 'rebass/styled-components';
import Link from 'next/link';
import Text from 'components/common/text';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import { SecondaryButton } from 'components/common/button';

const Container = styled.section`
  padding: 0 0 ${rem(6)} 0;
  background-color: ${theme.colors.lightOrange};
  color: ${theme.colors.white};

  .left-box {
    position: relative;
    height: ${rem(361)};

    img {
      object-fit: cover;
    }
    @media only screen and (min-width: ${breakpoints.tablet}) {
      height: ${rem(464)};
    }
  }

  .heading {
    white-space: nowrap;
    font-family: ${theme.typography.fonts.primary};
    font-weight: bold;
  }
`;

const TextContent = styled.div`
  width: ${rem(270)};
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: ${rem(36)};
`;

const StyledLogo = styled(Image)`
  margin-bottom: ${rem(34)};
`;

export default function PressHeader() {
  return (
    <Container>
      <Flex
        flexDirection={['column', 'column', 'row']}
        pr={[rem(55), rem(55), rem(24)]}
      >
        <Box className="left-box" width={[1, 1, 3 / 5]}>
          <Image
            alt="Nishi Press"
            src="/images/press-header.png"
            layout="fill"
          />
        </Box>
        <Box
          width={[1, 1, 2 / 5]}
          display="flex"
          flexDirection="column"
          alignItems={['flex-end', 'flex-end', 'center']}
        >
          <TextContent>
            <Image
              alt="dwell logo"
              className="dwell-logo"
              src="/images/dwell-logo.png"
              width="69px"
              height="26px"
              layout="fixed"
            />
            <Text
              mt={[rem(35), rem(35)]}
              mb={[rem(8), rem(8)]}
              variant="headingSmall"
              color={theme.colors.white}
            >
              Dwell Mag
            </Text>
            <Text
              mb={[rem(48), rem(48)]}
              variant="bodySmall"
              color={theme.colors.white}
            >
              Fall 2021 | Edition 12
            </Text>
            <Text
              mb={[rem(8), rem(8)]}
              pl={[rem(25), rem(25)]}
              variant="body"
              color={theme.colors.white}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus .
            </Text>
            <Link href="/">
              <a>
                <SecondaryButton large color={theme.colors.white}>
                  read the article
                </SecondaryButton>
              </a>
            </Link>
          </TextContent>
        </Box>
      </Flex>
      <Text
        className="heading"
        mt={[rem(70), rem(70), rem(78)]}
        mb={[rem(55), rem(55), rem(78)]}
        ml={[rem(27), rem(27), rem(121)]}
        variant="heading"
        color={theme.colors.orange}
      >
        “Their work is stunning. They’re not bound by trends
      </Text>
    </Container>
  );
}
