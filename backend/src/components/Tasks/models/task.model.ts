import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { StatusModel } from 'src/components/Status/models/status.model';

@ObjectType()
export class TaskModel {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => StatusModel, { nullable: true })
  status?: Status;

  @Field(() => Int, { nullable: true })
  statusId?: number;

  @Field({ nullable: true })
  date?: Date;

  @Field({ nullable: true })
  memo?: string;

  @Field({ nullable: true })
  userId?: number;
}
