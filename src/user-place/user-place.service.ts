import { Injectable } from '@nestjs/common';
import { CreateUserPlaceDto } from './dto/create-user-place.dto';
import { UpdateUserPlaceDto } from './dto/update-user-place.dto';
import { Model } from 'mongoose';
import { UserPlace } from './user-place.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserPlaceService {
  constructor(
    @InjectModel('UserPlace') private readonly userplace: Model<UserPlace>,
  ) {}
  create(createUserPlaceDto: CreateUserPlaceDto) {
    return this.userplace.create(createUserPlaceDto);
  }

  findAll() {
    return this.userplace.find({});
  }

  findOne(id: number) {
    return this.userplace.findOne({ id });
  }

  update(id: number, updateUserPlaceDto: UpdateUserPlaceDto) {
    return this.userplace.findOne({ _id: id }).updateOne(updateUserPlaceDto);
  }

  remove(id: number) {
    return this.userplace.deleteOne({ _id: id });
  }
}
