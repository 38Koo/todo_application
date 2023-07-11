import { SimpleGrid } from '@chakra-ui/react';

import { TaskCard } from '@/components/TaskCard/TaskCard';
import {
  Exact,
  GetUserQuery,
  useGetAllTasksQuery,
  useGetUserQuery
} from '@/generated/types';
import { useAuth } from '@/context/AuthContext';
import { QueryHookOptions } from '@apollo/client';

type a = QueryHookOptions<
  GetUserQuery,
  Exact<{
    email: string;
  }>
>;

const List = () => {
  const auth = useAuth();

  const { data } = useGetUserQuery({
    variables: {
      email: auth?.email!
    }
  });

  const { data: list } = useGetAllTasksQuery({
    variables: {
      userId: data?.user.id!
    }
  });

  return (
    <>
      {!!list?.task && list.task.length !== 0 && (
        <SimpleGrid columns={4} spacing="10">
          {list.task.map((item) => (
            <TaskCard
              key={item.id}
              id={item.id}
              statusId={item.statusId}
              title={item.title}
              status={item.status}
              date={item.date}
              memo={item.memo}
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      subTitle: 'dashborad'
    }
  };
}

export default List;
