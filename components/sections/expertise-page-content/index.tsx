import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import theme from 'styles/theme';

const Container = styled.section`
  padding-bottom: ${rem(38)};
  background-repeat: no-repeat;
  background-size: contain;
  padding-left: ${rem(28)};
  padding-right: ${rem(28)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-bottom: ${rem(94)};
    padding-left: 10%;
    margin: 0 auto;
  }
`;

const SectionText = styled(Text)`
  font-size: ${rem(32.57)};
  line-height: ${rem(34.74)};
  font-family: ${theme.typography.fonts.primary};
  font-weight: bold;
  color: ${theme.colors.orange};
  opacity: 0.3;
  margin-bottom: ${rem(20)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${rem(23)};
    max-width: ${rem(425)};
  }
`;

const ExpertiseSubheading = styled(Text)`
  position: relative;
  :before {
    content: '';
    width: 25%;
    height: ${rem(1)};
    background-color: ${theme.colors.sand};
    display: block;
    top: 50%;
    position: absolute;
    right: -${rem(28)};
    @media only screen and (min-width: ${breakpoints.tablet}) {
      width: 50%;
    }
  }
`;

export default function ExpertisePageContent() {
  return (
    <Container>
      <Flex flexDirection="column">
        <ExpertiseSubheading mb={rem(41)} variant="highlight">
          OUR EXPERTISE
        </ExpertiseSubheading>
        <SectionText>Consultation</SectionText>
        <SectionText>Research & Space Planning</SectionText>
        <SectionText>Conceptual & Schematic Design</SectionText>
        <SectionText>Design Development</SectionText>
        <SectionText>Project Management</SectionText>
        <SectionText>Ordering & Installation</SectionText>
        <SectionText>
          Specialty Services for Residential & Commercial Design
        </SectionText>
        <SectionText>Boutique Hotel Design</SectionText>
        <SectionText>Retail Design</SectionText>
        <SectionText>Custom Furniture Design</SectionText>
        <SectionText>Custom Textiles & Wallpaper</SectionText>
        <SectionText>Renovations and Remodeling</SectionText>
        {/* <Text variant="headingSmallMobile">Research & Space Planning</Text>
        <Text variant="headingSmallMobile">Conceptual & Schematic Design</Text> */}
      </Flex>
      {/* <Flex flexDirection="column" alignItems="center">
        <Text mb={rem(30)} variant="highlight">
          LET&apos;S BE SOCIAL
        </Text>
        <Link href="https://www.instagram.com/nishidesignstudio/">
          <a className="insta-link" target="_blank">
            <Instagram />
          </a>
        </Link>
      </Flex> */}
    </Container>
  );
}
