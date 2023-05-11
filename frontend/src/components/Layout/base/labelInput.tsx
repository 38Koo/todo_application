import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<FieldValues>;
  children: React.ReactNode;
  placeHolder?: string;
};

export const LabelInput = ({ children, placeHolder = '', register }: Props) => {
  return (
    <FormControl>
      <HStack spacing={100}>
        <FormLabel width="100px">{children}</FormLabel>
        <Input placeholder={placeHolder} {...register('title')}></Input>
      </HStack>
    </FormControl>
  );
};
