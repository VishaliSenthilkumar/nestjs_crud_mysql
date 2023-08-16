import { Post } from 'src/typeOrm/post.entity';
import { Profile } from 'src/typeOrm/profile.entity';
import { User } from 'src/typeOrm/user.entity';
import { CreateUserParams, UpdateUserParams, createPostParams, createUserProfileParams } from 'src/utils/types';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    private profileRepository;
    private postRepository;
    constructor(userRepository: Repository<User>, profileRepository: Repository<Profile>, postRepository: Repository<Post>);
    fetchUsers(): Promise<User[]>;
    fetchUser(id: number): Promise<User>;
    createUser(userDetails: CreateUserParams): Promise<User>;
    updateUser(id: number, updateUserDetails: UpdateUserParams): Promise<import("typeorm").UpdateResult>;
    removeUser(id: number): Promise<import("typeorm").DeleteResult>;
    createUserProfile(id: number, createUserprofileDetails: createUserProfileParams): Promise<User>;
    createPost(id: number, createPostDetails: createPostParams): Promise<User>;
}
