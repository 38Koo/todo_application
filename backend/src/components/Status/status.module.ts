import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusResolver } from './status.resolvers';

@Module({
  providers: [StatusResolver, StatusService, PrismaService],
  exports: [StatusService],
})
export class StatusModule {}
