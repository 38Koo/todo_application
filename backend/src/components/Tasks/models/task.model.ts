import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TaskModel {
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  title: string;

  @Field((type) => Number)
  statusId: number;

  @Field((type) => Date)
  date: Date;

  @Field((type) => String)
  memo: string;
}
