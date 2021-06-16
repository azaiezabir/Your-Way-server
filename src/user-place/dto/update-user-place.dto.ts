import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPlaceDto } from './create-user-place.dto';

export class UpdateUserPlaceDto extends PartialType(CreateUserPlaceDto) {}
