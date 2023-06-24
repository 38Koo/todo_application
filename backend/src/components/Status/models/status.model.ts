import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StatusModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
