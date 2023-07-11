import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { StatusModel } from 'src/components/Status/models/status.model';
import { CustomDateScalar } from 'src/graphql/customScalar/date';

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

  @Field(() => CustomDateScalar, { nullable: true })
  date?: string;

  @Field({ nullable: true })
  memo?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;
}
