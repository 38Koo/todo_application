import { GetServerSideProps } from 'next';
import { Inter } from 'next/font/google';

import { useGetStatusListQuery } from '@/generated/types';

type Props = {
  title: string;
};

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data } = useGetStatusListQuery();
  console.log(data);

  return (
    <>
      <main>
        <div>
          <p>Test</p>
          <ul>
            {data?.status && (
              <>
                <li>{data?.status[0]?.name}</li>
                <li>{data?.status[1].name}</li>
                <li>{data?.status[2].name}</li>
                <li>{data?.status[3].name}</li>
              </>
            )}
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
