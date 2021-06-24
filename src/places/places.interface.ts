import { Document } from 'mongoose';
import { Coordinates } from './coordinates.schema';

export interface Place extends Document {
  name: string;
  picture: string;
  description: string;
  tags: string;
  id_category: string;
  location: Coordinates;
}
