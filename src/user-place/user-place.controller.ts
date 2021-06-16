import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserPlaceService } from './user-place.service';
import { CreateUserPlaceDto } from './dto/create-user-place.dto';
import { UpdateUserPlaceDto } from './dto/update-user-place.dto';

@Controller('userplace')
export class UserPlaceController {
  constructor(private readonly userPlaceService: UserPlaceService) {}

  @Post()
  create(@Body() createUserPlaceDto: CreateUserPlaceDto) {
    return this.userPlaceService.create(createUserPlaceDto);
  }

  @Get()
  findAll() {
    return this.userPlaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPlaceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserPlaceDto: UpdateUserPlaceDto,
  ) {
    return this.userPlaceService.update(+id, updateUserPlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPlaceService.remove(+id);
  }
}
