import { Button, FormControl, Stack, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { LabelDate } from '@/components/Layout/base/labelDate';
import { LabelInput } from '@/components/Layout/base/labelInput';
import { LabelSelect } from '@/components/Layout/base/labelSelect';
import { LabelTextarea } from '@/components/Layout/base/labelTextarea';

const Create = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch('title'));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={20} direction="row" alignItems="center" justifyContent="center">
        <FormControl>
          <Stack spacing={20}>
            <LabelInput name='title' register={register}>Title</LabelInput>
            <LabelTextarea name='memo' register={register}>Memo</LabelTextarea>
            <LabelSelect name='status' register={register}>Status</LabelSelect>
            <LabelDate name='date' register={register}>Date</LabelDate>
          </Stack>
        </FormControl>
        <Button type="submit" width="50px">
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export async function getStaticProps() {
  return {
    props: {
      subTitle: 'Create'
    }
  };
}

export default Create;
