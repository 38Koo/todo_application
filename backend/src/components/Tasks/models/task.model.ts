import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TaskModel {
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  title: string;

  @Field({ nullable: true })
  statusId?: number;

  @Field({ nullable: true })
  date?: Date;

  @Field({ nullable: true })
  memo?: string;

  @Field({ nullable: true })
  userId?: number;
}