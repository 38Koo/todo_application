import { QueryHookOptions } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/react';

import { TaskCardLayout } from '@/components/TaskCard/TaskCardLayout';
import { useAuth } from '@/context/AuthContext';
import {
  Exact,
  GetUserQuery,
  useGetAllTasksQuery,
  useGetUserQuery
} from '@/generated/types';

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
            <TaskCardLayout key={item.id} {...item} />
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
