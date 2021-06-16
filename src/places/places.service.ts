import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Model } from 'mongoose';
import { Place } from './places.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PlacesService {
  constructor(@InjectModel('Place') private readonly place: Model<Place>) {}
  create(createPlaceDto: CreatePlaceDto) {
    return this.place.create(createPlaceDto);
  }

  findAll() {
    return this.place.find({}).populate('id_category');
  }

  findOne(id: number) {
    return this.place.findOne({ id });
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return this.place.findOne({ _id: id }).updateOne(updatePlaceDto);
  }

  remove(id: number) {
    return this.place.deleteOne({ _id: id });
  }
}
