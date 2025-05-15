import { Test, TestingModule } from '@nestjs/testing';
import { DonneesMeteoJourController } from './donnees-meteo-jour.controller';
import { DonneesMeteoJourService } from './donnees-meteo-jour.service';

describe('DonneesMeteoJourController', () => {
  let controller: DonneesMeteoJourController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonneesMeteoJourController],
      providers: [DonneesMeteoJourService],
    }).compile();

    controller = module.get<DonneesMeteoJourController>(DonneesMeteoJourController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
