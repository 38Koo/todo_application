import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createUserInput {
  @Field()
  uuid: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
