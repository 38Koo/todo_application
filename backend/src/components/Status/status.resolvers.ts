import { Resolver } from '@nestjs/graphql';
import { StatusModel } from './models/status.model';
import { StatusService } from './status.service';
import { Query } from '@nestjs/graphql';

@Resolver((of) => StatusModel)
export class StatusResolver {
  constructor(private readonly StatusService: StatusService) {}

  @Query(() => [StatusModel], { name: 'status', nullable: true })
  async Status(): Promise<StatusModel[]> {
    return this.StatusService.findAll();
  }
}
