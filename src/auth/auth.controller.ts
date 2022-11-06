import {Body, Controller, HttpCode, HttpStatus, Post, Req, UploadedFile, UseInterceptors} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {AuthDto} from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    signup(@Body() dto:AuthDto){
        return this.authService.signup(dto)
    }
    @HttpCode(HttpStatus.OK)
    @Post('signin')
   // @UseInterceptors(FileInterceptor('file'))
    signin(@Body() dto:AuthDto){
        return this.authService.signin(dto)
    }
}