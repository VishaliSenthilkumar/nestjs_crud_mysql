import { Body, Controller, Delete, Get, Put, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { UpdateUserDto } from 'src/dto/updateUser.dto';
import { CreateUserProfileDto } from 'src/dto/createUserProfile.dto';
import { CreatePostDto } from 'src/dto/createPost.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    fetchUsers() : any {
        return this.userService.fetchUsers();
    }

    @Get(':id')
    fetchUser(@Param('id') id: number) : any {
        return this.userService.fetchUser(id);
    }

    @Post()
    insertUser(
            @Body() createUserDto: CreateUserDto
        ) : any {
            return this.userService.createUser(createUserDto);
    }

    @Patch(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.userService.updateUser(id,updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.removeUser(id);
    }

    @Post(':id/profile')
    createUserProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() createUserProfileDto: CreateUserProfileDto
        ) {
        return this.userService.createUserProfile(id, createUserProfileDto);
    }

    @Post(':id/posts')
    createPost(
        @Param('id', ParseIntPipe) id: number,
        @Body() createPostDto: CreatePostDto        
        ) {
        return this.userService.createPost(id, createPostDto);
    }

}
