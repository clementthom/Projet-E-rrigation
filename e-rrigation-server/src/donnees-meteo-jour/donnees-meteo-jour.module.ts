import { Module } from '@nestjs/common';
import { DonneesMeteoJourService } from './donnees-meteo-jour.service';
import { DonneesMeteoJourController } from './donnees-meteo-jour.controller';

@Module({
  controllers: [DonneesMeteoJourController],
  providers: [DonneesMeteoJourService],
})
export class DonneesMeteoJourModule {}
