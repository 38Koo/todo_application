import { Box, FormControl, FormLabel, HStack, SelectField } from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { useGetStatusListQuery } from '@/generated/types';

type Props = {
  register: UseFormRegister<FieldValues>;
  children: React.ReactNode;
  name: string
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
              return <option value={`${item.name}`} key={`${item.id}`}>{item.name}</option>
            })}
          </SelectField>
        </Box>
      </HStack>
    </FormControl>
  );
};
