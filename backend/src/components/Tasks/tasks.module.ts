import { Module } from '@nestjs/common';
import { TaskResolver } from './tasks.resolvers';
import { TaskService } from './tasks.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TaskResolver, TaskService, PrismaService],
  exports: [TaskService],
})
export class TasksModule {}
