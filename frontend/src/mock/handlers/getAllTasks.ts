import { graphql } from 'msw';

export const getAllTasks = graphql.query('getAllTasks', (req, res, ctx) => {
  return res(
    ctx.data([
      {
        id: 2,
        title: 'test',
        status: {
          id: 1,
          name: 'todo',
          __typename: 'StatusModel'
        },
        statusId: 1,
        date: '2023/12/20',
        memo: 'test',
        __typename: 'TaskModel'
      }
    ])
  );
});
