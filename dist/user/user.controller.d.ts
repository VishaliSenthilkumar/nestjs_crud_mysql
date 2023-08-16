import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { UpdateUserDto } from 'src/dto/updateUser.dto';
import { CreateUserProfileDto } from 'src/dto/createUserProfile.dto';
import { CreatePostDto } from 'src/dto/createPost.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    fetchUsers(): any;
    fetchUser(id: number): any;
    insertUser(createUserDto: CreateUserDto): any;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
    createUserProfile(id: number, createUserProfileDto: CreateUserProfileDto): Promise<import("../typeOrm/user.entity").User>;
    createPost(id: number, createPostDto: CreatePostDto): Promise<import("../typeOrm/user.entity").User>;
}
