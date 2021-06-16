import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../user/user.schema';
import { Place } from '../places/place.schema';
import * as mongoose from 'mongoose';

@Schema()
export class UserPlace {
  @Prop()
  favorit: string;
  @Prop()
  rate: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  id_user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Place' })
  id_place: Place;
}
export const UserPlaceSchema = SchemaFactory.createForClass(UserPlace);
