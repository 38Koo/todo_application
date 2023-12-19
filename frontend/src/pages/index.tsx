import { Box, Button, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const onSubmit = (toLogin: boolean) => {
    if (toLogin === true) {
      router.push('/login');
      return;
    }
    router.push('/signin');
  };

  return (
    <Stack spacing="16">
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
            height={180}
            width={380}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="white"
          >
            <Text position="relative" my={0} fontSize="30px">
              Let&apos;s Manage Your Task!
            </Text>
          </Box>
        </Box>
      </Heading>
      <HStack justifyContent="space-around">
        <Button
          background="linear-gradient(135deg, #ff9900, #ff3333)"
          boxShadow="3px 3px 5px black"
          _hover={{
            bg: 'linear-gradient(135deg, #ff9900, #ff3333)',
            transform: 'translate(3px, 3px)',
            boxShadow: 'none'
          }}
          width="24"
          onClick={() => onSubmit(false)}
        >
          Sign in
        </Button>
        <Button
          background="linear-gradient(135deg, #ffcc99, #cc6633)"
          boxShadow="3px 3px 5px black"
          _hover={{
            bg: 'linear-gradient(135deg, #ffcc99, #cc6633)',
            transform: 'translate(3px, 3px)',
            boxShadow: 'none'
          }}
          width="24"
          onClick={() => onSubmit(true)}
        >
          Log in
        </Button>
      </HStack>
    </Stack>
  );
}

export async function getStaticProps() {
  return {
    props: {
      subTitle: 'Top'
    }
  };
}
