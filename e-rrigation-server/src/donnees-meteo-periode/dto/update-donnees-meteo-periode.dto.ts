import { PartialType } from '@nestjs/swagger';
import { CreateDonneesMeteoPeriodeDto } from './create-donnees-meteo-periode.dto';

export class UpdateDonneesMeteoPeriodeDto extends PartialType(CreateDonneesMeteoPeriodeDto) {}
