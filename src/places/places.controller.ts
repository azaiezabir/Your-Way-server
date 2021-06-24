import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  // @Get()
  // findAll() {
  //   return this.placesService.findAll();
  // }

  @Get('/onecategory')
  findAllCat(@Query('id_category') id_category) {
    console.log('test category');

    return this.placesService.findAllCategories({ id_category });
  }

  @Get('/nearest')
  findAllP(@Query('long') long, @Query('lat') lat) {
    console.log('long');


    return this.placesService.findAllPlaces(long, lat);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(id, updatePlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(id);
  }
}
