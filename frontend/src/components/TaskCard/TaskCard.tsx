import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  VStack,
  HStack,
  Text
} from '@chakra-ui/react';

type Props = {
  task: {
    id: number;
    title: string;
    statusId?: number | null | undefined;
    date?: any;
    memo?: string | null | undefined;
    status?: { id: number; name: string } | null | undefined;
  };
};

export const TaskCard = ({ task }: Props) => {
  return (
    <Card
      p={16}
      // borderRadius="25% 10%"
      borderRadius="10%"
      border="solid"
      borderColor="gray.200"
      width={300}
      bgColor="khaki"
      height={400}
    >
      <CardHeader>
        <Heading size="md" margin="0 5%">
          {task.title}
        </Heading>
      </CardHeader>
      <StackDivider border="solid" borderColor="gray.200" marginY="8" />
      <CardBody>
        <Stack divider={<StackDivider border="solid" borderColor="gray.200" />}>
          <VStack divider={<StackDivider border="solid" />}>
            <HStack width="100%">
              <Heading as="h3" size="xs" minW="30%" margin="0 5%">
                Status
              </Heading>
              <Text fontSize="2xl">{task.status?.name}</Text>
            </HStack>
            <HStack width="100%">
              <Heading as="h3" size="xs" minW="30%" margin="0 5%">
                Date
              </Heading>
              <Text>{task.date}</Text>
            </HStack>
          </VStack>
          <Stack spacing="2" paddingX="5%">
            <Heading as="h3" size="xs" minW="30%" marginY="0">
              Memo
            </Heading>
            <Text>{task.memo}</Text>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};
