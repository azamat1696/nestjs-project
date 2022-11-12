import {Controller, Get, Param, Patch, Req, UseGuards} from '@nestjs/common';
import {Request} from "express";
import {JwtGuard} from "../auth/guard";
import {getUserDecorator} from "../auth/decorator";
import {User} from "@prisma/client"

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {

    @Get('me')
    getMe(@getUserDecorator() user: User){
      return user
    }
    @Patch('update/:id')
    editUser(@Param() params){
        console.log(params.id)
    }
}
