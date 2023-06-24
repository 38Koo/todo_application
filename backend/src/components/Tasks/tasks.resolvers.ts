import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskModel } from './models/task.model';
import { TaskService } from './tasks.service';
import { createTaskInput } from './dto/create_task.input';

@Resolver(() => TaskModel)
export class TaskResolver {
  constructor(private readonly TaskService: TaskService) {}

  @Query(() => [TaskModel], { name: 'task', nullable: true })
  async task(): Promise<TaskModel[]> {
    return this.TaskService.findAll();
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: createTaskInput,
  ): Promise<TaskModel> {
    return this.TaskService.createTask(createTaskInput);
  }
}
