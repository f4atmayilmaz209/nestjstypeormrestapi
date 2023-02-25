import {Body, Controller,Post, UsePipes,Get, ValidationPipe,Param,ParseIntPipe} from "@nestjs/common";
import { CreateUserDto } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";


@Controller('/users')
export class UserController {
    constructor(private userService:UserService){
    }

    @Get('/')
    async getAllUsers():Promise<UserEntity[]>{
        return await this.userService.getAllUsers();

    }
    @Get('/:id')
    async getQuizById(@Param('id',ParseIntPipe) id:number):Promise<UserEntity>{
        return await this.userService.getUserById(id);
    }
    @Post('')
    @UsePipes(ValidationPipe)
    async createNewUser(@Body() user:CreateUserDto){
        return await this.userService.createNewUser(user);

    }
}
