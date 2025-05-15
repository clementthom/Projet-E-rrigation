import { PartialType } from '@nestjs/swagger';
import { CreateDonneesMeteoJourDto } from './create-donnees-meteo-jour.dto';

export class UpdateDonneesMeteoJourDto extends PartialType(CreateDonneesMeteoJourDto) {}
