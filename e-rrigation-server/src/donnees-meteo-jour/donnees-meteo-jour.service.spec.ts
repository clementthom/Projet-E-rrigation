import { Test, TestingModule } from '@nestjs/testing';
import { DonneesMeteoJourService } from './donnees-meteo-jour.service';

describe('DonneesMeteoJourService', () => {
  let service: DonneesMeteoJourService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonneesMeteoJourService],
    }).compile();

    service = module.get<DonneesMeteoJourService>(DonneesMeteoJourService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
