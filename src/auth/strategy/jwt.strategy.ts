import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {PrisamService} from "../../prisam/prisam.service";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        config: ConfigService,
        private prisma: PrisamService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get('JWT_SECRET')
        });
    }
    async validate(payload:{
        sub: number,
        email: string
    }){
        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.sub
            }
        })
       delete user.password
        return user
    }

}