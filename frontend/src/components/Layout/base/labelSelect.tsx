import { Box, FormControl, FormLabel, HStack, SelectField } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

import { CreateTaskInput, useGetStatusListQuery } from '@/generated/types';

type Props = {
  register: UseFormRegister<CreateTaskInput>;
  children: React.ReactNode;
  name: keyof CreateTaskInput
};

export const LabelSelect = ({ children, register, name }: Props) => {
  const { data } = useGetStatusListQuery();

  return (
    <FormControl>
      <HStack spacing={100}>
        <FormLabel width="100px">{children}</FormLabel>
        <Box>
          <SelectField {...register(name)}>
            <option value=""></option>
            {!!data?.status && data.status.map((item) => {
              return <option value={`${item.id}`} key={`${item.id}`}>{item.name}</option>
            })}
          </SelectField>
        </Box>
      </HStack>
    </FormControl>
  );
};
