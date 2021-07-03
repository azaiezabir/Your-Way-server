import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';
import { env } from '../config';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  JwtModule.register({ secret: env.secret })],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
