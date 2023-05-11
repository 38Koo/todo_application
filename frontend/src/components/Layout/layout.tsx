import { Box, Stack } from '@chakra-ui/react';
import Head from 'next/head';

import { Title } from '../Title/tilte';

type Props = {
  subTitle: string;
  children: React.ReactNode;
};

export const Layout = ({ children, subTitle }: Props) => {
  console.log(subTitle);
  return (
    <>
      <Head>
        <title>Todo Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <Title titleSize="h2" borderSize="4px solid">
          Todo Application
        </Title>
        <Title titleSize="h3" borderSize="2px solid">
          {subTitle}
        </Title>
      </Stack>
      <Box display={'flex'} justifyContent={'center'} mt={'40px'}>
        {children}
      </Box>
    </>
  );
};
