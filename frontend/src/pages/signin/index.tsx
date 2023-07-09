import { Button, Stack, VStack } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { LabelInput } from '@/components/Layout/base/labelInput';

export type AuthProps = {
  email: string;
  password: string;
};

const Signin = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<AuthProps>();

  // ユーザーが登録ボタンを押したときにdoRegister関数が実行される
  const onSubmit = (data: AuthProps) => {
    const auth = getAuth();

    // Firebaseで用意されているユーザー登録の関数
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        // ユーザー登録すると自動的にログインされてuserCredential.userでユーザーの情報を取得できる
        // const user = userCredential.user;
        // ユーザー登録ができたかどうかをわかりやすくするためのアラート
        alert('登録完了！');
        router.push('/list');
      })
      .catch((error) => {
        alert('エラーが発生しました。');
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={20}>
        <Stack>
          <LabelInput name="email" register={register}>
            mail address
          </LabelInput>
          <LabelInput name="password" register={register}>
            password
          </LabelInput>
        </Stack>
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
      subTitle: 'Sign in'
    }
  };
}

export default Signin;
