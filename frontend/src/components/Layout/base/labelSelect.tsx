import { FormControl, FormLabel, HStack, Select } from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<FieldValues>;
  children: React.ReactNode;
};

export const LabelSelect = ({ children, register }: Props) => {
  return (
    <FormControl>
      <HStack spacing={100}>
        <FormLabel width="100px">{children}</FormLabel>
        <Select placeholder="Select status" {...register('status')}>
          <option value="1">1</option>
          {/*TODO: DBから取得 */}
        </Select>
      </HStack>
    </FormControl>
  );
};
