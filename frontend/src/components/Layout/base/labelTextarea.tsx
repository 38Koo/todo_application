import { FormControl, FormLabel, HStack, Textarea } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

import { CreateTaskInput } from '@/generated/types';

type Props = {
  children: React.ReactNode;
  register: UseFormRegister<CreateTaskInput>;
  placeHolder?: string;
  name: keyof CreateTaskInput
};

export const LabelTextarea = ({ children, register, placeHolder = '', name }: Props) => {
  return (
    <FormControl>
      <HStack spacing={100}>
        <FormLabel width="100px">{children}</FormLabel>
        <Textarea height="100px" overflowY={'auto'} placeholder={placeHolder} {...register(name)} />
      </HStack>
    </FormControl>
  );
};
