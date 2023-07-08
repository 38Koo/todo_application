import { Button, VStack } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { AuthProps } from '../signin';

import { LabelInput } from '@/components/Layout/base/labelInput';
import { firebaseConfig } from '@/lib/FirebaseConfig';

const Login = () => {
  const { register, handleSubmit } = useForm<AuthProps>();
  const router = useRouter();

  const onSubmit = (data: AuthProps) => {
    initializeApp(firebaseConfig);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((UserCredential) => {
        console.log(UserCredential.user);
        alert('ログインしました！');
        router.push('/list');
      })
      .catch((e) => {
        alert('認証に失敗しました。');
        console.error(e);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <LabelInput name="email" register={register}>
          ID
        </LabelInput>
        <LabelInput name="password" register={register}>
          password
        </LabelInput>
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
      subTitle: 'Login'
    }
  };
}

export default Login;
