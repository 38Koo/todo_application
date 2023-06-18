import { Stack } from '@chakra-ui/react';

import { TaskCard } from '@/components/TaskCard/TaskCard';
import { useGetAllTasksQuery } from '@/generated/types';


const List = () => {
  const { data } = useGetAllTasksQuery();

  return (
    <>
      {!!data?.task && data.task.length !== 0 && (
        <Stack direction="row" spacing="4" flexWrap="wrap">
          {data.task.map((item) => (
            <TaskCard key={item.id} task={item} />
          ))}
        </Stack>
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
