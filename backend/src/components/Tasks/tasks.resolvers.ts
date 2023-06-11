import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TaskModel } from './models/task.model';
import { TaskService } from './tasks.service';
import { createTaskInput } from './dto/create_task.input';
import { Task } from '@prisma/client';
import { StatusModel } from '../Status/models/status.model';
import { StatusService } from '../Status/status.service';

@Resolver((of) => TaskModel)
export class TaskResolver {
  constructor(
    private readonly TaskService: TaskService, // private readonly statusService: StatusService,
  ) {}

  @Query(() => [TaskModel], { name: 'task', nullable: true })
  async task(): Promise<TaskModel[]> {
    return this.TaskService.findAll();
  }

  // @Query(() => [StatusModel], { name: 'status', nullable: true })
  // async statusNameById(
  //   @Args('id', { type: () => Int }) id: number,
  // ): Promise<StatusModel> {
  //   return this.statusService.findOneById(id);
  // }

  // @ResolveField()
  // async task2(): Promise<TaskModel[]> {
  //   return this.TaskService.findAll();
  // }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: createTaskInput,
  ): Promise<TaskModel> {
    return this.TaskService.createTask(createTaskInput);
  }
}
