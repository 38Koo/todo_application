import { Module } from '@nestjs/common';
import { PostsResolver } from './post.resolvers';

@Module({
  providers: [PostsResolver, Object],
})
export class PostsModule {}
