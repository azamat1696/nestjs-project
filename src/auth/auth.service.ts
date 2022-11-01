import {Injectable} from "@nestjs/common";
import {PrisamService} from "../prisam/prisam.service";
import {AuthDto} from "./dto";
import * as argon from "argon2";
@Injectable()
export class AuthService {
    constructor(private prisma: PrisamService) {
    }
   async signin(dto:AuthDto){

        const hash = await argon.hash(dto.password)
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                password: hash,
            },
            select:{
                id: true,
                email: true,
                createdAt: true
            }
        })
       // one way to hide password
       //delete user.password
       // second way to hide password
        return  user;
    }
    signup( ){
        return {msr: 'body.body'}
    }
}