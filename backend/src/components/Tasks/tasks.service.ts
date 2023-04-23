import { Injectable } from '@nestjs/common';
import { TaskModel } from './models/task.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<TaskModel[]> {
    return this.prisma.task.findMany();
  }
}
