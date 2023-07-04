import { Box, Button, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

import { useGetStatusListQuery } from '@/generated/types';

type Props = {
  title: string;
};

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data } = useGetStatusListQuery();
  console.log(data);
  const router = useRouter();

  const onSubmit = (toLogin: boolean) => {
    if (toLogin === true) {
      router.push('list');
      return;
    }
    router.push('create');
  };

  return (
    <Box>
      <Heading as="h2">Let&apos;s manage your Task!</Heading>
      <Box alignContent="space-around">
        <Button onClick={() => onSubmit(true)}>Sign in</Button>
        <Button onClick={() => onSubmit(false)}>Log in</Button>
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      title: 'Hello, GraphQL!'
    }
  };
};
