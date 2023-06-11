import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { StatusModel } from 'src/components/Status/models/status.model';

@ObjectType()
export class TaskModel {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => StatusModel, { nullable: true })
  status?: Status;

  @Field((type) => Int, { nullable: true })
  statusId?: number;

  @Field({ nullable: true })
  date?: Date;

  @Field({ nullable: true })
  memo?: string;

  @Field({ nullable: true })
  userId?: number;
}
