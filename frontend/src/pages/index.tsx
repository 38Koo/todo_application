import { Inter } from 'next/font/google';
import { GetServerSideProps } from 'next';
import { useGetAllTasksQuery } from '@/generated/types';

type Props = {
  title: string;
};

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data } = useGetAllTasksQuery();
  console.log(data);

  return (
    <>
      <main>
        <div>
          <p>Test</p>
          <ul>
            <li>{data?.task[0].id}</li>
            <li>{data?.task[0].title}</li>
            <li>{data?.task[1].id}</li>
            <li>{data?.task[1].title}</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      title: 'Hello, GraphQL!'
    }
  };
};
