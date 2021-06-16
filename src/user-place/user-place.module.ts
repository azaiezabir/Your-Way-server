import { Module } from '@nestjs/common';
import { UserPlaceService } from './user-place.service';
import { UserPlaceController } from './user-place.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPlaceSchema } from './user-place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserPlace', schema: UserPlaceSchema }]),
  ],
  controllers: [UserPlaceController],
  providers: [UserPlaceService]
})
export class UserPlaceModule {}
