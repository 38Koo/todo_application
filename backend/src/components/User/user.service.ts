import { Injectable } from '@nestjs/common';
import { Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModel } from './models/user.model';
import { User } from '@prisma/client';
import { createUserInput } from './dto/create_user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(userEmail: string): Promise<UserModel> {
    return this.prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
  }

  async createUser(createUserInput: createUserInput): Promise<UserModel> {
    return this.prisma.user.create({
      data: {
        uuid: createUserInput.uuid,
        name: createUserInput.name,
        email: createUserInput.email,
      },
    });
  }
}
