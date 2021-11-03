import React from 'react';
import { rem } from 'polished';
import Link from 'next/link';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import Text from 'components/common/text';
import theme from 'styles/theme';
import { SecondaryButton } from 'components/common/button';

const Container = styled.div`
  padding: ${rem(20)} ${rem(30)} ${rem(10)} ${rem(30)};
  background-color: ${(props) => (props.asCard ? '#fff' : 'transparent')};
`;

export default function ListingCard({
  location,
  year,
  title,
  href,
  asCard,
  className,
  ...rest
}) {
  return (
    <Container className={className} asCard={asCard} {...rest}>
      <Flex mb={rem(62)} justifyContent="space-between">
        <Text
          variant="caption"
          letterSpacing="normal"
          color={theme.colors.gray}
        >
          {location}
        </Text>
        <Text
          variant="caption"
          letterSpacing="normal"
          color={theme.colors.gray}
        >
          {year}
        </Text>
      </Flex>
      <Text variant="headingSmall" mt={rem(20)} mb={rem(34)}>
        {title}
      </Text>
      {asCard && (
        <Link href={href} passHref>
          <a>
            <SecondaryButton>explore</SecondaryButton>
          </a>
        </Link>
      )}
    </Container>
  );
}
