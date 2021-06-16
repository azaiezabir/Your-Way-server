import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  phone: string;
  date_of_birth: string;
  gender: string;
}
