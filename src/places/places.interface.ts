import { Document } from 'mongoose';

export class Place extends Document {
  name: string;
  picture: string;
  description: string;
  tags: string;
  id_category: string;
}
