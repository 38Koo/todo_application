import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  children: React.ReactNode;
  placeHolder?: string;
  name: Path<T>;
};

export const LabelInput = <T extends FieldValues>({
  children,
  placeHolder = '',
  register,
  name
}: Props<T>) => {
  return (
    <FormControl>
      <HStack spacing={100}>
        <FormLabel width="100px">{children}</FormLabel>
        <Input placeholder={placeHolder} {...register(name)}></Input>
      </HStack>
    </FormControl>
  );
};
