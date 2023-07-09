import { Box, Button, Heading } from '@chakra-ui/react';
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
      router.push('login');
      return;
    }
    router.push('signin');
  };

  return (
    <Box>
      <Heading as="h2">Let&apos;s manage your Task!</Heading>
      <Box alignContent="space-around">
        <Button onClick={() => onSubmit(false)}>Sign in</Button>
        <Button onClick={() => onSubmit(true)}>Log in</Button>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  return {
    props: {
      subTitle: 'Top'
    }
  };
}
