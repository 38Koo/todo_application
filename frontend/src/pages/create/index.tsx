import { Button, FormControl, Stack, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { LabelDate } from '@/components/Layout/base/labelDate';
import { LabelInput } from '@/components/Layout/base/labelInput';
import { LabelSelect } from '@/components/Layout/base/labelSelect';
import { LabelTextarea } from '@/components/Layout/base/labelTextarea';
import { useAuth } from '@/context/AuthContext';
import {
  CreateTaskInput,
  useCreateTaskMutation,
  useGetUserQuery
} from '@/generated/types';

const Create = () => {
  const { register, handleSubmit } = useForm<CreateTaskInput>();
  const [createTaskMutation] = useCreateTaskMutation({
    onError: (error) => console.error(error)
  });
  const auth = useAuth();

  const { data: user } = useGetUserQuery({
    variables: {
      email: auth?.email!
    }
  });

  const onSubmit = (data: CreateTaskInput) => {
    console.log(data);
    data.statusId = Number(data.statusId);
    data.date = data.date.replace(/-/g, '/');
    data.userId = user?.user.id;
    createTaskMutation({ variables: { input: data } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack
        spacing={20}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl>
          <Stack spacing={20}>
            <LabelInput name="title" register={register}>
              Title
            </LabelInput>
            <LabelTextarea name="memo" register={register}>
              Memo
            </LabelTextarea>
            <LabelSelect name="statusId" register={register}>
              Status
            </LabelSelect>
            <LabelDate name="date" register={register}>
              Date
            </LabelDate>
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
