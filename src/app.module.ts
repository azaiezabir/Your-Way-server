import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PlacesModule } from './places/places.module';
import { CategoriesModule } from './categories/categories.module';
import { UserPlaceModule } from './user-place/user-place.module';
import { JwtModule } from '@nestjs/jwt';
import { env } from './config';
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(env.Connection),
    JwtModule.register({secret : env.secret}),
    PlacesModule,
    CategoriesModule,
    UserPlaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
