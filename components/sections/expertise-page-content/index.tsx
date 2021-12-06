import styled from 'styled-components';
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
  max-width: ${rem(1440)};

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
