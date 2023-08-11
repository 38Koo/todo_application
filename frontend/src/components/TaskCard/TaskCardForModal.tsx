import {
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  VStack,
  HStack,
  Card,
  Button,
  Box,
  Input,
  SelectField,
  Textarea
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { match } from 'ts-pattern';

import {
  CreateTaskInput,
  TaskModel,
  useDeleteTaskMutation,
  useGetStatusListQuery,
  useUpdateTaskMutation
} from '@/generated/types';

type Props = {
  onOpen: () => void | undefined;
  onClose: () => void | undefined;
} & TaskModel;

const StatusIdToNumber = {
  todo: 1,
  pending: 2,
  done: 3,
  doing: 4
} as const;

export const TaskCardForModal = ({
  id,
  title,
  statusId,
  date,
  memo,
  onOpen,
  onClose
}: Props) => {
  const { register, handleSubmit } = useForm<CreateTaskInput>();
  const { data: statusList } = useGetStatusListQuery();

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

  const formatDate = (date: string) => {
    return date.replaceAll('/', '-');
  };

  const [deleteTaskMutation] = useDeleteTaskMutation();
  const [updateTaskMutation] = useUpdateTaskMutation();

  const onClickDeleteButton = (taskId: number) => {
    const deleteAnswer = confirm('本当に削除しますか？');

    if (deleteAnswer) {
      deleteTaskMutation({
        variables: {
          taskId: taskId
        }
      })
        .then(() => {
          alert('削除しました！');
        })
        .catch((e) => {
          alert('エラーが発生しました。');
          console.error(e);
        });
    }
  };

  const onSubmit = (data: CreateTaskInput) => {
    console.log(data);
    data.statusId = data.statusId ? Number(data.statusId) : statusId;
    data.date = data.date.replace(/-/g, '/');
    updateTaskMutation({
      variables: {
        taskId: id,
        input: data
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card
        p={16}
        borderRadius="10%"
        border="solid"
        borderColor="gray.200"
        width={450}
        bgColor={statusIdToBgColorName(statusId)}
        height={600}
        onDoubleClick={onOpen}
      >
        <CardHeader>
          <HStack>
            <Heading size="md" margin="0 5%">
              <Input defaultValue={title} {...register('title')} />
            </Heading>
          </HStack>
        </CardHeader>
        <StackDivider border="solid" borderColor="gray.200" marginY="8" />
        <CardBody>
          <Stack
            divider={<StackDivider border="solid" borderColor="gray.200" />}
          >
            <VStack divider={<StackDivider border="solid" />}>
              <HStack width="100%">
                <Heading as="h3" size="xs" minW="30%" margin="0 5%">
                  Status
                </Heading>
                <SelectField {...register('statusId')}>
                  <option value=""></option>
                  {!!statusList?.status &&
                    statusList.status.map((item) => {
                      return (
                        <option
                          value={`${item.id}`}
                          key={`${item.id}`}
                          selected={item.id === statusId ? true : false}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                </SelectField>
              </HStack>
              <HStack width="100%">
                <Heading as="h3" size="xs" minW="30%" margin="0 5%">
                  Date
                </Heading>
                <Input
                  type="date"
                  {...register('date')}
                  defaultValue={formatDate(date)}
                />
              </HStack>
            </VStack>
            <Stack spacing="2" paddingX="5%">
              <Heading as="h3" size="xs" minW="30%" marginY="0">
                Memo
              </Heading>
              <Textarea
                height="100px"
                overflowY={'auto'}
                defaultValue={memo ? memo : ''}
                {...register('memo')}
              />
            </Stack>
          </Stack>
        </CardBody>
        <Box justifyContent="flex-end">
          <Button
            onClick={() => onClickDeleteButton(id)}
            justifyContent="flex-start"
          >
            削除
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button type="submit" width="50px">
            Submit
          </Button>
        </Box>
      </Card>
    </form>
  );
};
