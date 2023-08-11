import { Button } from '@chakra-ui/react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

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

  return <Button onClick={onClick}>Log out</Button>;
};
