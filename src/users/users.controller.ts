import { Body, Controller, Get, Post, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return[{username:'Tirtha', mail:'tirtha@mail.com'}]
    }

    @Get('test')
    testGet(){
        return{key:'isReturned?'};
    }

    @Post('create')
    createUser(@Body() userData:CreateUserDto){
        console.log(userData);
        return{};
    }

    @Get(':id')
    getUserById(@Param('id')id: string){
        console.log(id);
        return {id};
    }
}
