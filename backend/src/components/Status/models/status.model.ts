import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StatusModel {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
