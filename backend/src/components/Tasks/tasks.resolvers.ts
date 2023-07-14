import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskModel } from './models/task.model';
import { TaskService } from './tasks.service';
import { createTaskInput } from './dto/create_task.input';

@Resolver(() => TaskModel)
export class TaskResolver {
  constructor(private readonly TaskService: TaskService) {}

  @Query(() => [TaskModel], { name: 'task', nullable: true })
  async task(@Args('userId') userId: number): Promise<TaskModel[]> {
    return this.TaskService.findAll(userId);
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: createTaskInput,
  ): Promise<TaskModel> {
    return this.TaskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('taskId') taskId: number,
    @Args('createTaskInput') createTaskInput: createTaskInput,
  ) {
    return this.TaskService.updateTask(taskId, createTaskInput);
  }

  @Mutation(() => TaskModel)
  async deleteTask(@Args('taskId') taskId: number): Promise<TaskModel> {
    return this.TaskService.deleteTask(taskId);
  }
}
