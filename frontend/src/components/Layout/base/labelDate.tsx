import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  register: UseFormRegister<FieldValues>;
  name: string
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
