import { TaskCard } from '@/components/TaskCard/TaskCard';
import { Title } from '@/components/Title/tilte';
import { Card, CardHeader, Heading, Stack } from '@chakra-ui/react';

const List = () => {
  const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Title titleSize="h3" borderSize="2px solid">
        dashborad
      </Title>
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

export default List;
