import { Card, useDisclosure } from '@chakra-ui/react';
import { match } from 'ts-pattern';

import { TaskModel } from '@/generated/types';
import { ModalCard } from '../Modal/Modal';
import { TaskCard } from './TaskCard';

type Props = TaskModel;

const StatusIdToNumber = {
  todo: 1,
  pending: 2,
  done: 3,
  doing: 4
} as const;

export const TaskCardLayout = (props: Props) => {
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <TaskCard onOpen={onOpen} {...props} />
      <ModalCard isOpen={isOpen} onOpen={onOpen} onClose={onClose} {...props} />
    </>
  );
};
