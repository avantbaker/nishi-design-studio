import Link from 'next/link';
import Input from 'components/common/input';
import Text from 'components/common/text';
import { PrimaryButton } from 'components/common/button';
import styled from 'styled-components';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { Flex } from 'rebass/styled-components';
import { rem } from 'polished';
import House from 'components/common/icons/house';
import Twitter from 'components/common/icons/twitter';
import Instagram from 'components/common/icons/instagram';
import LinkedIn from 'components/common/icons/linkedin';
import Facebook from 'components/common/icons/facebook';

const Footer = styled.footer`
  padding: ${rem(56)} ${rem(27)} ${rem(20)} ${rem(27)};
  background-color: ${theme.colors.lightTan};

  a {
    color: ${theme.colors.orange};
  }

  .logoImg {
    width: ${rem(92)};
    position: relative;
    top: ${rem(4)};
    @media only screen and (min-width: ${breakpoints.tablet}) {
      width: ${rem(100)};
    }
  }

  :before {
    content: '';
    display: block;
    width: 100vw;
    height: ${rem(39)};
    margin: 0 -${rem(27)};
    position: relative;
    left: 0;
    border-top: ${rem(1)} solid ${theme.colors.orange};
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    padding: ${rem(89)} ${rem(96)} ${rem(41)} ${rem(92)};

    :before {
      height: ${rem(47)};
      margin: 0 -${rem(96)} 0 -${rem(92)};
    }
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
  margin-right: -${rem(45)};

  ul {
    columns: 2;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const NavItem = styled.a`
  color: ${theme.colors.orange};
  font-family: ${theme.typography.fonts.primary};
  font-size: ${rem(15)};
  line-height: ${rem(30)};
  font-weight: 500;
`;

const SocialFlex = styled(Flex)`
  a {
    padding: 0 ${rem(8)};

    :first-child {
      padding-left: 0;
    }
    :last-child {
      padding-right: 0;
    }
  }
`;

export default function FooterComponent() {
  return (
    <Footer>
      <Flex
        flexDirection={['column', 'column', 'row']}
        mb={[rem(50), rem(50), null]}
        justifyContent="space-between"
        className="left-content"
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
        <Flex flexDirection="column">
          <NavContainer>
            <ul>
              <li>
                <Link href="/space" passHref>
                  <NavItem>/ space</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/expertise" passHref>
                  <NavItem>/ expertise</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <NavItem>/ about</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <NavItem>/ contact</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref>
                  <NavItem>/ blog</NavItem>
                </Link>
              </li>
              <li>
                <Link href="/press" passHref>
                  <NavItem>/ press</NavItem>
                </Link>
              </li>
            </ul>
          </NavContainer>
          <SocialFlex mt={[rem(44), rem(44), rem(60)]}>
            <Link href="/">
              <a>
                <House fill={theme.colors.orange} />
              </a>
            </Link>
            <Link href="https://twitter.com/nishidesignatl">
              <a>
                <Twitter fill={theme.colors.orange} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Instagram fill={theme.colors.orange} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Facebook fill={theme.colors.orange} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <LinkedIn fill={theme.colors.orange} />
              </a>
            </Link>
          </SocialFlex>
        </Flex>
      </Flex>
      <Flex mb={rem(4)} alignItems="end" justifyContent="space-between">
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
  );
}