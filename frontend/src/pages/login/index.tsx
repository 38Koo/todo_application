import { VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { LabelInput } from '@/components/Layout/base/labelInput';

const Login = () => {
  const {register} = useForm();

  return (
    <>
      <VStack>
        <LabelInput name='id' register={register}>ID</LabelInput>
        <LabelInput name='password' register={register}>password</LabelInput>
      </VStack>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      subTitle: 'Login'
    }
  };
}

export default Login;
