import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaceDto } from './create-place.dto';

export class UpdatePlaceDto extends PartialType(CreatePlaceDto) {
  name: string;
  picture: string;
  description: string;
  tags: string;
  id_category: string;
  long: number;
  lang: number;
}
