import { Document } from 'mongoose';

export interface Place extends Document {
  name: string;
  picture: string;
  description: string;
  tags: string;
  id_category: string;
  long: number;
  lat: number;
}

