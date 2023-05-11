import { Stack } from '@chakra-ui/react';

import { TaskCard } from '@/components/TaskCard/TaskCard';

const List = () => {
  const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {cardList.length !== 0 && (
        <Stack direction="row" spacing="4" flexWrap="wrap">
          {cardList.map((item) => (
            <TaskCard key={item} />
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
