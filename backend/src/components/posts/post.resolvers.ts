import { Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';

@Resolver((of) => PostModel)
export class PostsResolver {
  constructor(private readonly prisma) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'Ne]stJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
}

// return [
//   {
//     id: '1',
//     title: 'Ne]stJS is so good.',
//   },
//   {
//     id: '2',
//     title: 'GraphQL is so good.',
//   },
// ];
