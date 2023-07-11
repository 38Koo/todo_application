import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';
import { createUserInput } from './dto/create_user.input';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly UserService: UserService) {}

  @Query(() => UserModel)
  async user(@Args('email') email: string): Promise<UserModel> {
    return this.UserService.findOne(email);
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('createUserInput') createUserInput: createUserInput,
  ): Promise<UserModel> {
    return this.UserService.createUser(createUserInput);
  }
}
