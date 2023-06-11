import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusModel } from './models/status.model';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<StatusModel[]> {
    return this.prisma.status.findMany();
  }

  async findOneById(statusId: number): Promise<StatusModel> {
    return this.prisma.status.findUnique({
      where: {
        id: statusId,
      },
    });
  }
}
