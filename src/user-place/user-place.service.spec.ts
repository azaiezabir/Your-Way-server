import { Test, TestingModule } from '@nestjs/testing';
import { UserPlaceService } from './user-place.service';

describe('UserPlaceService', () => {
  let service: UserPlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPlaceService],
    }).compile();

    service = module.get<UserPlaceService>(UserPlaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
