import React from 'react';
import { rem } from 'polished';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import Text from 'components/common/text';
import theme from 'styles/theme';
import { breakpoints } from 'styles/media';
import { SecondaryButton } from 'components/common/button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${rem(249)};
  overflow: auto;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(187)};
  }
`;

const ImageWrap = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: ${rem(187)};
  height: ${rem(187)};
  margin-bottom: ${rem(24)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(249)};
    height: ${rem(249)};
  }
`;

export default function TeamCard({ name, title, description, src, ...rest }) {
  return (
    <Container {...rest}>
      <ImageWrap>
        <Image
          src={src}
          layout="fill"
          // width="249px" height="249px"
        />
      </ImageWrap>
      <Text variant="highlight" mb={rem(16)} color={theme.colors.gray}>
        {name.toUpperCase()}
      </Text>
      <Text
        variant="bodySmall"
        fontWeight="bold"
        mb={rem(8)}
        color={theme.colors.gray}
      >
        {title}
      </Text>
      <Text variant="bodySmall" color={theme.colors.gray}>
        {description}
      </Text>
    </Container>
  );
}
