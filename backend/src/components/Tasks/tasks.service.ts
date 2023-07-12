import { Injectable } from '@nestjs/common';
import { TaskModel } from './models/task.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { createTaskInput } from './dto/create_task.input';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId): Promise<TaskModel[]> {
    return this.prisma.task.findMany({
      include: {
        status: true,
      },
      where: {
        userId: userId,
      },
    });
  }

  async createTask(createTaskInput: createTaskInput): Promise<TaskModel> {
    return this.prisma.task.create({
      data: {
        title: createTaskInput.title,
        date: createTaskInput.date || null,
        statusId: createTaskInput.statusId || null,
        memo: createTaskInput.memo || null,
        userId: createTaskInput.userId,
      },
    });
  }

  async deleteTask(taskId: number): Promise<TaskModel> {
    return this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  }
}
