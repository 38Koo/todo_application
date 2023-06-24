import { Resolver } from '@nestjs/graphql';
import { StatusModel } from './models/status.model';
import { StatusService } from './status.service';
import { Query } from '@nestjs/graphql';

@Resolver((of) => StatusModel)
export class StatusResolver {
  constructor(private readonly StatusService: StatusService) {}

  @Query(() => [StatusModel], { name: 'status', nullable: true })
  async status(): Promise<StatusModel[]> {
    return this.StatusService.findAll();
  }
}

// @Args('id', { type: () => Int }) id: number
// @Resolver(of => Author)
// export class AuthorsResolver {
//   constructor(
//     private authorsService: AuthorsService,
//     private postsService: PostsService,
//   ) {}

//   @Query(returns => Author)
//   async author(@Args('id', { type: () => Int }) id: number) {
//     return this.authorsService.findOneById(id);
//   }

//   @ResolveField()
//   async posts(@Parent() author: Author) {
//     const { id } = author;
//     return this.postsService.findAll({ authorId: id });
//   }
// }
