import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TasksModule } from './components/tasks/tasks.module';
import * as path from 'path';
import { StatusModule } from './components/Status/status.module';
import { CustomDateScalar } from './graphql/customScalar/date';
import { UserModule } from './components/User/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      resolvers: { date: CustomDateScalar },
    }),
    TasksModule,
    StatusModule,
    UserModule,
  ],
})
export class AppModule {}
