import { Module } from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {PrisamModule} from "../prisam/prisam.module";

@Module({
    imports: [PrisamModule],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}

