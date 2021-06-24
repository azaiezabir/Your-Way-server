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

  findAllCategories(args) {
    return this.place.find(args).populate('id_category');
  }

  findAllPlaces(long, lat) {
    console.log(typeof long);
    this.place.createIndexes({ point: '2dsphere' });
    return this.place.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [Number(long), Number(lat)],
          },
          $minDistance: 0,
          $maxDistance: 2000000,
        },
      },
    });
  }

  findOne(id: string) {
    return this.place.findOne({ id });
  }

  update(id: string, updatePlaceDto: UpdatePlaceDto) {
    return this.place.findOne({ _id: id }).updateOne(updatePlaceDto);
  }

  remove(id: string) {
    return this.place.deleteOne({ _id: id });
  }
}
