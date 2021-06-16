import { Test, TestingModule } from '@nestjs/testing';
import { UserPlaceController } from './user-place.controller';
import { UserPlaceService } from './user-place.service';

describe('UserPlaceController', () => {
  let controller: UserPlaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPlaceController],
      providers: [UserPlaceService],
    }).compile();

    controller = module.get<UserPlaceController>(UserPlaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
