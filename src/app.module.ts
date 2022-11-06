import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {AuthModule} from "./auth/auth.module";
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrisamModule } from './prisam/prisam.module';


@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true
      }),
      AuthModule,
      UserModule,
      BookmarkModule,
      PrisamModule,
  ],

})
export class AppModule {}
