export class CreatePlaceDto {
  name: string;
  picture: string;
  description: string;
  tags: string;
  id_category: string;
  location: Coordinate;
}

interface Coordinate {
  type: string;
  coordinates: [number]
}