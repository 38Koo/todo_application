import { Text } from '@chakra-ui/react';
import { User, getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

type Props = {
  user: User;
};

export const Logout = () => {
  const router = useRouter();
  const auth = getAuth();

  const onClick = () => {
    signOut(auth)
      .then(() => {
        alert('ログアウト成功しました！');
        router.push('/');
      })
      .catch(() => {
        alert('エラーが発生しました。');
      });
  };

  return <Text onClick={onClick}>Log out</Text>;
};
