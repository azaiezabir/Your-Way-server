import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserPasswordDto extends PartialType(CreateUserDto) {
  email: string;
  password: string;
  newPassword: string;
}
