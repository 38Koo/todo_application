import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TaskModel } from 'src/components/tasks/models/task.model';

@ObjectType()
export class UserModel {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  uuid: String;

  @Field(() => String)
  name: String;

  @Field(() => String)
  email: String;
}
