import { Test, TestingModule } from '@nestjs/testing';
import { DonneesMeteoPeriodeService } from './donnees-meteo-periode.service';

describe('DonneesMeteoPeriodeService', () => {
  let service: DonneesMeteoPeriodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonneesMeteoPeriodeService],
    }).compile();

    service = module.get<DonneesMeteoPeriodeService>(DonneesMeteoPeriodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
