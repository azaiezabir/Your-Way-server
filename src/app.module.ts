import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PlacesModule } from './places/places.module';
import { CategoriesModule } from './categories/categories.module';
import { UserPlaceModule } from './user-place/user-place.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://myway:myway@cluster0.a6hnw.mongodb.net/myway?retryWrites=true&w=majority',
    ),
    JwtModule.register({ secret: 'secret' }),
    PlacesModule,
    CategoriesModule,
    UserPlaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
