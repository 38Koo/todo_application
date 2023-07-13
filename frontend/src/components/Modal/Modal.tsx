import { TaskModel } from '@/generated/types';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { TaskCard } from '../TaskCard/TaskCard';

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
          <TaskCard onOpen={() => {}} {...props} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
