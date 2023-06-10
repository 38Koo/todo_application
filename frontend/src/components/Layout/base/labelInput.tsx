import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

import { CreateTaskInput } from '@/generated/types';

type Props = {
  register: UseFormRegister<CreateTaskInput>;
  children: React.ReactNode;
  placeHolder?: string;
  name: keyof CreateTaskInput
};

export const LabelInput = ({ children, placeHolder = '', register, name }: Props) => {
  return (
    <FormControl>
      <HStack spacing={100}>
        <FormLabel width="100px">{children}</FormLabel>
        <Input placeholder={placeHolder} {...register(name)}></Input>
      </HStack>
    </FormControl>
  );
};
