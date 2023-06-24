import { Field, InputType } from '@nestjs/graphql';
import { CustomDateScalar } from 'src/graphql/customScalar/date';

@InputType()
export class createTaskInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  statusId?: number;

  @Field(() => CustomDateScalar, { nullable: true })
  date?: string;

  @Field({ nullable: true })
  memo?: string;

  @Field({ nullable: true })
  userId?: number;
}
