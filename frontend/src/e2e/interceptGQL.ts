import { Page, Route } from '@playwright/test';

export async function interceptGQL(page: Page): Promise<void> {
  // 全てのエンドポイントへのリクエストをインターセプトする
  await page.route('http://localhost:8000/graphql', function (route: Route) {
    const req = route.request().postDataJSON();

    const operationName = req.operationName;

    let resp;
    switch (operationName) {
      case 'getUser':
        resp = {
          data: {
            user: {
              id: 1,
              email: 'test@example.com',
              __typename: 'UserModel'
            }
          }
        };
        break;
      case 'getAllTasks':
        resp = {
          data: {
            task: [
              {
                id: 2,
                title: 'TEST Tilte',
                status: {
                  id: 1,
                  name: 'todo',
                  __typename: 'StatusModel'
                },
                statusId: 1,
                date: '2023/12/20',
                memo: 'hoge fuga...',
                __typename: 'TaskModel'
              }
              // ...省略
            ]
          }
        };
        break;
      default:
        resp = null;
    }

    if (resp === null) {
      return route.fallback();
    }

    return route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(resp)
    });
  });
}
