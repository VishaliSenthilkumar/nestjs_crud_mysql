import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeOrm/user.entity';
import { Profile } from 'src/typeOrm/profile.entity';
import { Post } from 'src/typeOrm/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
