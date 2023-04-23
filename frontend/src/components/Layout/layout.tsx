import Head from 'next/head';
import { Title } from '../Title/tilte';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Todo Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title titleSize="h2" borderSize="4px solid">
        Todo Application
      </Title>
      <main>{children}</main>
    </>
  );
};
