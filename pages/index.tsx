import { breakpoints } from 'styles/media';
import theme from 'styles/theme';
import Link from 'next/link';
import Nav from 'components/common/nav';
import styled from 'styled-components';
import Input from 'components/common/input';
import { rem } from 'polished';
import SliderSection from 'components/common/slider-section';
import Text from 'components/common/text';
import { Flex } from 'rebass/styled-components';
import { PrimaryButton } from 'components/common/button';

const TopSection = styled.section`
  :before {
    content: '';
    background-image: url('/elements/limewash/NDS-Limewash-2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.5;
    z-index: -1;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    // height: ${rem(800)};
  }
`;

const Footer = styled.footer`
  padding: ${rem(44)} ${rem(27)} ${rem(20)} ${rem(27)};
  background-color: ${theme.colors.lightTan};
  height: 500px;

  a {
    color: ${theme.colors.orange};
  }

  .logoImg {
    width: ${rem(92)};
    @media only screen and (min-width: ${breakpoints.tablet}) {
      width: ${rem(100)};
    }
  }
  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: ${rem(44)} ${rem(96)} ${rem(41)} ${rem(92)};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${rem(38)};
  input {
    margin-bottom: ${rem(10)};
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    margin-bottom: 0;
    input {
      margin-bottom: 0;
      margin-right: ${rem(11)};
      width: ${rem(232)};
    }

    button {
      width: ${rem(139)};
    }
  }
`;

const NavContainer = styled.nav`
  width: ${rem(250)};

  ul {
    columns: 2;
  }
`;

const NavItem = styled.a`
  color: ${theme.colors.orange};
  font-family: ${theme.typography.fonts.primary};
  font-size: ${rem(15)};
  line-height: ${rem(30)};
  font-weight: bold;
`;

export default function Home() {
  return (
    <TopSection>
      <Nav />
      <SliderSection />
      <Footer>
        <Flex
          flexDirection={['column', 'column', 'row']}
          mb={[rem(50), rem(50), null]}
          justifyContent="space-between"
        >
          <Flex flexDirection="column">
            <Text color={theme.colors.orange} mb={rem(23)} variant="highlight">
              NDS IN YOUR INBOX
            </Text>
            <Form>
              <Input placeholder="email address" />
              <PrimaryButton>submit</PrimaryButton>
            </Form>
          </Flex>
          <NavContainer>
            <ul>
              <li>
                <Link href="/space" passHref>
                  <NavItem>/space</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <NavItem>/contact</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/expertise" passHref>
                  <NavItem>/expertise</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref>
                  <NavItem>/blog</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <NavItem>/about</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/press" passHref>
                  <NavItem>/press</NavItem>
                </Link>
              </li>
            </ul>
          </NavContainer>
        </Flex>
        <Flex mb={rem(4)} alignItems="end" justifyContent={'space-between'}>
          <Link href="/" passHref>
            <a>
              <img
                alt="LOGO NISHI design+studio"
                className="logoImg"
                src={theme.logos.black.png}
              />
            </a>
          </Link>
          <div>
            <Flex justifyContent="flex-end">
              <Link href="/privacy" passHref>
                <Text
                  as="a"
                  variant={['actionMobile', 'actionMobile', 'action']}
                  fontWeight="bold"
                  mr={rem(16)}
                  color={theme.colors.orange}
                >
                  Privacy
                </Text>
              </Link>
              <Link href="/terms" passHref>
                <Text
                  as="a"
                  variant={['actionMobile', 'actionMobile', 'action']}
                  fontWeight="bold"
                  color={theme.colors.orange}
                >
                  Terms
                </Text>
              </Link>
            </Flex>
            <Text
              variant={['captionMobile', 'captionMobile', 'caption']}
              textAlign="right"
            >
              Copyright © 2021 - NISHI design+studio
            </Text>
          </div>
        </Flex>
      </Footer>
    </TopSection>
  );
}
