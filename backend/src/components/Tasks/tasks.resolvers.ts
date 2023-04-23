import { Args, Query, Resolver } from '@nestjs/graphql';
import { TaskModel } from './models/task.model';
import { TaskService } from './tasks.service';
import { NotFoundException } from '@nestjs/common';

@Resolver((of) => TaskModel)
export class TaskResolver {
  constructor(private readonly TaskService: TaskService) {}

  @Query(() => [TaskModel], { name: 'task', nullable: true })
  async Task(): Promise<TaskModel[]> {
    return this.TaskService.findAll();
  }
}
