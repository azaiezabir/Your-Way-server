import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [UserModule,MongooseModule.forRoot('mongodb+srv://myway:myway@cluster0.a6hnw.mongodb.net/myway?retryWrites=true&w=majority'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
