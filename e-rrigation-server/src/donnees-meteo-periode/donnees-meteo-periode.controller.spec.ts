import { Test, TestingModule } from '@nestjs/testing';
import { DonneesMeteoPeriodeController } from './donnees-meteo-periode.controller';
import { DonneesMeteoPeriodeService } from './donnees-meteo-periode.service';

describe('DonneesMeteoPeriodeController', () => {
  let controller: DonneesMeteoPeriodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonneesMeteoPeriodeController],
      providers: [DonneesMeteoPeriodeService],
    }).compile();

    controller = module.get<DonneesMeteoPeriodeController>(DonneesMeteoPeriodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
