import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from '../categories/category.schema';
import { Coordinates } from './coordinates.schema';
import * as mongoose from 'mongoose';

@Schema()
export class Place {
  @Prop()
  name: string;
  @Prop()
  picture: string;
  @Prop()
  description: string;
  @Prop()
  tags: string;

  // @Prop()
  // long: number;

  // @Prop()
  // lat: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  id_category: Category;

  @Prop({index: '2dsphere'})
  location: Coordinates
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
