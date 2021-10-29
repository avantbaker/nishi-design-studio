import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import ListingCard from 'components/common/listing-card';
import ArrowRight from 'components/common/icons/arrow-right';
import Twitter from 'components/common/icons/twitter';
import Facebook from 'components/common/icons/facebook';
import Instagram from 'components/common/icons/instagram';
import LinkedIn from 'components/common/icons/linkedin';
import ArrowButton from 'components/common/icons/arrow-button';
import ArrowButtonEmpty from 'components/common/icons/arrow-button-empty';
import Input from 'components/common/input';
import HamburgerMenu from 'components/common/hamburger';
import { PrimaryButton, SecondaryButton } from 'components/common/button';

export default function StyleGuide() {
  return (
    <>
      <Flex m="0 10%" px={rem(24)} height="100vh" bg="white">
        <Box width={1 / 2}>
          <Text as="h1" variant="headingSmall" mb={rem(24)}>
            Typeography
          </Text>
          <Input placeholder="email address" />
          <PrimaryButton mr={rem(16)}>Primary Button</PrimaryButton>
          <PrimaryButton size="large">Primary Button Large</PrimaryButton>
          <HamburgerMenu isOpen={false} toggleMobileNav={() => {}} />
          <ListingCard
            location="Atlanta, GA"
            year="2021"
            title="jungle oasis"
            href=""
          />
          <SecondaryButton>Secondary Button</SecondaryButton>
          <Text variant="heading">Heading</Text>
          <Text variant="headingMobile">Heading Mobile</Text>
          <Text variant="headingSmall">Heading Small</Text>
          <Text variant="headingSmallMobile">Heading Small Mobile</Text>
          <Text variant="highlight">Highlight</Text>
          <Text variant="highlightMobile">Highlight Mobile</Text>
          <Text variant="body">Body</Text>
          <Text variant="bodySmall">Body Small</Text>
          <Text variant="bodyLarge">Body Large</Text>
          <Text variant="label">LABEL</Text>
          <Text variant="labelMobile">LABEL MOBILE</Text>
          <Text variant="action">Action</Text>
          <Text variant="caption">Caption</Text>
          <Text variant="captionMobile">Caption Mobile</Text>
          <Text variant="button">Button</Text>
        </Box>
        <Box width={1 / 2}>
          <Text as="h1" variant="headingSmall" mb={rem(24)}>
            Icons / Graphics
          </Text>
          <ArrowRight />
          <Instagram />
          <Twitter />
          <Facebook />
          <LinkedIn />
          <ArrowButton />
          <ArrowButtonEmpty />
        </Box>
      </Flex>
    </>
  );
}
