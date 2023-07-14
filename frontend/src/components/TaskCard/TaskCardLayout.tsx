import { Box, useDisclosure } from '@chakra-ui/react';

import { ModalCard } from '../Modal/Modal';

import { TaskModel } from '@/generated/types';
import { TaskCardForList } from './TaskCardForList';

type Props = TaskModel;

export const TaskCardLayout = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <TaskCardForList onOpen={onOpen} onClose={() => {}} {...props} />
      <ModalCard isOpen={isOpen} onOpen={onOpen} onClose={onClose} {...props} />
    </Box>
  );
};
