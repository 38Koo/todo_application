import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';
import { createUserInput } from './dto/create_user.input';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly UserService: UserService) {}

  @Mutation(() => UserModel)
  async createUser(
    @Args('createUserInput') createUserInput: createUserInput,
  ): Promise<UserModel> {
    return this.UserService.createUser(createUserInput);
  }
}
