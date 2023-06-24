import { SimpleGrid } from '@chakra-ui/react';

import { TaskCard } from '@/components/TaskCard/TaskCard';
import { useGetAllTasksQuery } from '@/generated/types';

const List = () => {
  const { data } = useGetAllTasksQuery();

  return (
    <>
      {!!data?.task && data.task.length !== 0 && (
        <SimpleGrid columns={4} spacing="10">
          {data.task.map((item) => (
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
