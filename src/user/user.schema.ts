import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  username: string;
  @Prop()
  password: string;
  @Prop()
  email: string;
  @Prop()
  phone: string;
  @Prop()
  date_of_birth: string;
  @Prop()
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
