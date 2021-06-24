import { Document } from 'mongoose';

export interface UserPlace extends Document {
  favorit: string;
  rate: string;
}
