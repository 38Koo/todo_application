import { Box, BoxProps, Heading, HeadingProps } from '@chakra-ui/react';
import React from 'react';

type Props = {
  titleSize: HeadingProps['as'];
  borderSize: BoxProps['border'];
  children: React.ReactNode;
};

export const Title = ({ titleSize, borderSize, children }: Props) => {
  return (
    <>
      <Heading as={titleSize} marginBottom="0">
        {children}
      </Heading>
      <Box borderBottom={borderSize} borderColor="black" width="250px" />
    </>
  );
};
