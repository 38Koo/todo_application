import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TasksModule } from './components/tasks/tasks.module';
import * as path from 'path';
import { StatusModule } from './components/Status/status.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TasksModule,
    StatusModule,
  ],
})
export class AppModule {}
