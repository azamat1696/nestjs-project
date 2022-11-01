import { Module } from '@nestjs/common';
import {AuthModule} from "./auth/auth.module";
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { PrisamModule } from './prisam/prisam.module';

@Module({
  imports: [
      AuthModule,
      UserModule,
      BookmarkModule,
      PrisamModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'nestjs_test',
    //   entities: [],
    //   synchronize: true,
    // }),
  ],

})
export class AppModule {}
