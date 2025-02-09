import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    username?: string;
    email?: string;
    password?: string;
    phone?: number;
    date_of_birth?: string;
    gender?: string;
}
