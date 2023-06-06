import { FormControl, FormLabel, HStack, Textarea } from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  register: UseFormRegister<FieldValues>;
  placeHolder?: string;
  name: string
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
