import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { TaskCardForModal } from '../TaskCard/TaskCardForModal';

import { TaskModel } from '@/generated/types';

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
} & TaskModel;

export const ModalCard = ({ isOpen, onOpen, onClose, ...props }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <TaskCardForModal onOpen={() => {}} onClose={onClose} {...props} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
