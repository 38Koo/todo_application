import { Box, Card, CardBody, CardHeader, HStack, Heading, Stack, StackDivider } from '@chakra-ui/react';

export const TaskCard = () => {
  return (
    <Card
      bg="gray.100"
      p={16}
      borderRadius="md"
      border="solid"
      borderColor="gray.200"
      // margin={16}
      width={600}
      bgColor="khaki"
    >
      <CardHeader>
        <Heading size="md">b</Heading>
      </CardHeader>
      <StackDivider border="solid" borderColor="gray.200" />
      <CardBody>
        <Stack divider={<StackDivider border="solid" borderColor="gray.200" />} spacing={4}>
          <HStack spacing={16}>
            <Heading size="xs" minW="200px">
              Status
            </Heading>
            <Box>TEST</Box>
          </HStack>
          <HStack spacing={16}>
            <Heading size="xs" minW="200px">
              Date
            </Heading>
            <Box>TEST</Box>
          </HStack>
          <Stack spacing={16}>
            <Heading size="xs" minW="200px">
              Memo
            </Heading>
            <Box>This is Test!This is Test!This is Test!This is Test!This is Test!This is Test!</Box>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};
