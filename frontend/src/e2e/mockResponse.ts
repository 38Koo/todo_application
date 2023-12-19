import { getAllTasks } from './fixtures/getAllTasks';
import { getStatusList } from './fixtures/getStatusList';
import { getUser } from './fixtures/getUser';

export const mockResponse = (operationName: string) => {
  switch (operationName) {
    case 'getUser':
      return getUser;
    case 'getAllTasks':
      return getAllTasks;
    case 'getStatusList':
      return getStatusList;
    default:
      return null;
  }
};
