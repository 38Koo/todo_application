import { Button, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { TaskCardLayout } from '@/components/TaskCard/TaskCardLayout';
import { useAuth } from '@/context/AuthContext';
import { useGetAllTasksQuery, useGetUserQuery } from '@/generated/types';

const List = () => {
  const auth = useAuth();
  const router = useRouter();

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

  if (!list?.task || list.task.length === 0) {
    return (
      <VStack
        spacing={10}
        height="60vh"
        alignContent="center"
        justifyContent="center"
      >
        <Text fontSize={50}>There is No Task.</Text>
        <Button size="lg" onClick={() => router.push('/create')}>
          create
        </Button>
      </VStack>
    );
  }

  return (
    <SimpleGrid columns={4} spacing="10">
      {list.task.map((item) => (
        <TaskCardLayout key={item.id} {...item} />
      ))}
    </SimpleGrid>
  );
};

export async function getStaticProps() {
  return {
    props: {
      subTitle: 'dashboard'
    }
  };
}

export default List;
