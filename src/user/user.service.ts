import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeOrm/post.entity';
import { Profile } from 'src/typeOrm/profile.entity';
import { User } from 'src/typeOrm/user.entity';
import { CreateUserParams, UpdateUserParams, createPostParams, createUserProfileParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(Post) private postRepository: Repository<Post>
    ) {}

    fetchUsers() {
        return this.userRepository.find({ relations: ['profile'] });
    }

    async fetchUser(id : number) {
        const user = await this.userRepository.findOneBy({ id });
        if(!user) {
            throw new HttpException(
                'User not found. Cannot able to create profile',
                HttpStatus.BAD_REQUEST,
            );
        }
        return this.userRepository.findOneBy({ id });
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
          ...userDetails,
          createdAt: new Date(),
        });
        return this.userRepository.save(newUser);
      }
    updateUser(id : number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, {...updateUserDetails})
    }

    removeUser(id : number) {
        return this.userRepository.delete({ id });
    }

    async createUserProfile(
        id: number, 
        createUserprofileDetails: createUserProfileParams
        ) {
        const user = await this.userRepository.findOneBy({ id });
        if(!user) {
            throw new HttpException(
                'User not found. Cannot able to create profile',
                HttpStatus.BAD_REQUEST,
            );
        }
        const newProfile = this.profileRepository.create({...createUserprofileDetails});
        const savedProfile = await this.profileRepository.save(newProfile);
        user.profile = savedProfile;
        return this.userRepository.save(user);
    }

    async createPost(
        id: number, 
        createPostDetails: createPostParams
        ) {
        const user = await this.userRepository.findOneBy({ id });
        if(!user) {
            throw new HttpException(
                'User not found. Cannot able to create post',
                HttpStatus.BAD_REQUEST,
            );
        }
        const newPost = this.postRepository.create({...createPostDetails, user});
        const savedPost = await this.postRepository.save(newPost);
        user.posts.push(savedPost);
        return this.userRepository.save(user);
    }
}
