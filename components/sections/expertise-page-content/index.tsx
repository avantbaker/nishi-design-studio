import styled from 'styled-components';
import Image from 'next/image';
import SectionItem from 'components/sections/expertise-page-content/section-item';
import { Flex } from 'rebass/styled-components';
import Text from 'components/common/text';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';
import theme from 'styles/theme';
import useMediaQuery from 'hooks/use-media-query';
import { queries } from 'styles/media';
import { useState } from 'react';

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

const SectionText = styled(Text)`
  font-size: ${rem(32.57)};
  line-height: ${rem(34.74)};
  font-family: ${theme.typography.fonts.primary};
  font-weight: bold;
  color: ${theme.colors.orange};
  opacity: 0.3;
  margin-bottom: ${rem(20)};
  max-width: ${rem(425)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    font-size: ${rem(75)};
    line-height: ${rem(80)};
    margin-bottom: ${rem(23)};
    max-width: initial;
    z-index: 1;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row-reverse;
    position: relative;
    margin-bottom: ${rem(131)};
  }
`;

const ImageWrap = styled.div`
  display: flex;
  align-items: end;
  column-gap: ${rem(8)};
  margin-bottom: ${rem(30)};
  justify-content: center;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    column-gap: ${rem(13)};
    margin-bottom: 0;
    width: 40%;
    position: absolute;
    bottom: 0;
    right: 15%;
    bottom: -125px;
    z-index: 0;
  }
`;

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const sections = [
  { title: 'Consultation' },
  { title: 'Research & Space Planning' },
  { title: 'Conceptual & Schematic Design' },
  { title: 'Design Development' },
  { title: 'Project Management' },
  { title: 'Ordering & Installation' },
  { title: 'Specialty Services for Residential & Commercial Design' },
  { title: 'Boutique Hotel Design' },
  { title: 'Retail Design' },
  { title: 'Custom Furniture Design' },
  { title: 'Custom Textiles & Wallpaper' },
  { title: 'Renovations and Remodeling' },
];

export default function ExpertisePageContent() {
  const [activeSection, setActiveSection] = useState('');
  const isTablet = useMediaQuery(queries.minTablet);

  console.log('activeSection ', activeSection);

  return (
    <Container>
      <Flex flexDirection="column">
        <ExpertiseSubheading mb={rem(41)} variant="highlight">
          OUR EXPERTISE
        </ExpertiseSubheading>
        <ItemList>
          {sections.map(({ title }) => (
            <SectionItem
              key={title}
              onClick={() => {
                console.log('test');
                setActiveSection(title);
              }}
              active={activeSection === title}
            >
              {title}
            </SectionItem>
          ))}
        </ItemList>
      </Flex>
    </Container>
  );
}
