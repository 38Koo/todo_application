import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { TaskCardForList } from '../TaskCard/TaskCardForList';

import { TaskModel } from '@/generated/types';
import { TaskCardForModal } from '../TaskCard/TaskCardForModal';

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
} & TaskModel;

export const ModalCard = ({ isOpen, onOpen, onClose, ...props }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        containerProps={{ position: 'relative', left: 100, top: -800 }}
      >
        <ModalBody>
          <TaskCardForModal onOpen={() => {}} onClose={onClose} {...props} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
