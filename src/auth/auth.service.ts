import {ForbiddenException, Injectable} from "@nestjs/common";
import {PrisamService} from "../prisam/prisam.service";
import {AuthDto} from "./dto";
import * as argon from "argon2";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
@Injectable()
export class AuthService {
    constructor(
        private prisma: PrisamService,
        private jwt: JwtService,
        private config:ConfigService
    ) {
    }
   async signup(dto:AuthDto){

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

        return  this.signToken(user.id,user.email);
    }
   async signin(dto:AuthDto){
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user) throw new ForbiddenException('Credential incorrect.','Please check your info');

        const pwMaches = await argon.verify(
            user.password,
            dto.password
        )
      if (!pwMaches) throw new ForbiddenException('Credential incorrect.','Please check your info');

        return this.signToken(user.id,user.email)
    }
    async signToken(userId:number,email:string):Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email
        };
        const secret = this.config.get('JWT_SECRET')
        const token = await this.jwt.signAsync(payload,{
            expiresIn: '15m',
            secret: secret,
        });

        return {
            access_token: token,
        }
    }
}