import { Box, HStack, Stack } from '@chakra-ui/react';
import Head from 'next/head';

import { Logout } from '../Logout/logout';
import { Title } from '../Title/tilte';

import { useAuth } from '@/context/AuthContext';

type Props = {
  subTitle: string;
  children: React.ReactNode;
};

export const Layout = ({ children, subTitle }: Props) => {
  const user = useAuth();

  console.log(user);
  return (
    <>
      <Head>
        <title>Todo Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HStack justifyContent={'space-between'}>
        <Stack>
          <Title titleSize="h2" borderSize="4px solid">
            Todo Application
          </Title>
          <Title titleSize="h3" borderSize="2px solid">
            {subTitle}
          </Title>
        </Stack>
        {!!user && <Logout user={user} />}
      </HStack>
      <Box display={'flex'} justifyContent={'center'} mt={'40px'}>
        {children}
      </Box>
    </>
  );
};
