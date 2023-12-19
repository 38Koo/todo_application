import {
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  VStack,
  HStack,
  Text,
  Card
} from '@chakra-ui/react';
import { match } from 'ts-pattern';

import { TaskModel } from '@/generated/types';

type Props = {
  onOpen: () => void | undefined;
  onClose: () => void | undefined;
  isModal?: boolean;
} & TaskModel;

const StatusIdToNumber = {
  todo: 1,
  pending: 2,
  done: 3,
  doing: 4
} as const;

export const TaskCardForList = ({
  id,
  title,
  status,
  statusId,
  date,
  memo,
  isModal,
  onOpen
}: Props) => {
  const statusIdToBgColorName = (statusId: TaskModel['statusId']) => {
    return match(statusId)
      .with(null, undefined, () => 'white')
      .with(StatusIdToNumber.todo, () => 'khaki')
      .with(StatusIdToNumber.pending, () => 'palegreen')
      .with(StatusIdToNumber.done, () => 'pink')
      .with(StatusIdToNumber.doing, () => 'lightcyan')
      .otherwise(() => {
        console.error('statusIdが不正です。');
        return 'white';
      });
  };

  return (
    <Card
      p={16}
      borderRadius="10%"
      border="solid"
      borderColor="gray.200"
      width={isModal ? 450 : 300}
      bgColor={statusIdToBgColorName(statusId)}
      height={isModal ? 600 : 400}
      onDoubleClick={onOpen}
      data-testid="playwrightTest"
    >
      <CardHeader>
        <HStack>
          <Heading size="md" margin="0 5%">
            {title}
          </Heading>
        </HStack>
      </CardHeader>
      <StackDivider border="solid" borderColor="gray.200" marginY="8" />
      <CardBody>
        <Stack divider={<StackDivider border="solid" borderColor="gray.200" />}>
          <VStack divider={<StackDivider border="solid" />}>
            <HStack width="100%">
              <Heading as="h3" size="xs" minW="30%" margin="0 5%">
                Status
              </Heading>
              <Text fontSize="2xl">{status?.name}</Text>
            </HStack>
            <HStack width="100%">
              <Heading as="h3" size="xs" minW="30%" margin="0 5%">
                Date
              </Heading>
              <Text>{date}</Text>
            </HStack>
          </VStack>
          <Stack spacing="2" paddingX="5%">
            <Heading as="h3" size="xs" minW="30%" marginY="0">
              Memo
            </Heading>
            <Text>
              {!!memo?.length && memo?.length > 140
                ? memo?.slice(0, 140) + '・・・'
                : memo}
            </Text>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};
