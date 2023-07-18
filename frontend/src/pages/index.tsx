import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

import { useGetStatusListQuery } from '@/generated/types';

type Props = {
  title: string;
};

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data } = useGetStatusListQuery();
  const router = useRouter();

  const onSubmit = (toLogin: boolean) => {
    if (toLogin === true) {
      router.push('/login');
      return;
    }
    router.push('/signin');
  };

  return (
    <Box>
      <Heading as="h2">
        <Box
          height={200}
          width={400}
          border="solid"
          borderRadius="50px"
          padding="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="conic-gradient(#ffa500, #ffd700, #ff6347, #deb887, #ffa500)"
        >
          <Box
            border="solid"
            borderRadius="50px"
            height={190}
            width={380}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="white"
          >
            <Text position="relative" my={0}>
              Let&apos;s manage your Task!
            </Text>
          </Box>
        </Box>
      </Heading>
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
