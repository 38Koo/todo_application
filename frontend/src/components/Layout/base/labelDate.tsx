import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

import { CreateTaskInput } from '@/generated/types';

type Props = {
  children: React.ReactNode;
  register: UseFormRegister<CreateTaskInput>;
  name: keyof CreateTaskInput
};

export const LabelDate = ({ children, register, name }: Props) => {
  return (
    <FormControl>
      <HStack spacing={100}>
        <FormLabel width="100px">{children}</FormLabel>
        <Input type="date" {...register(name)} />
      </HStack>
    </FormControl>
  );
};
