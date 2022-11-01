import {Body, Controller, Post, Req, UploadedFile, UseInterceptors} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {AuthDto} from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    signin(@Body() dto:AuthDto){
        return this.authService.signin(dto)
    }
    @Post('signup')
    @UseInterceptors(FileInterceptor('file'))
    signup(@UploadedFile() file, @Body() body){
        console.log(file);
        console.log(body);
        return this.authService.signup()
    }
}