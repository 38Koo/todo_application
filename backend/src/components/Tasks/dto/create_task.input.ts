import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createTaskInput {
  @Field()
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
