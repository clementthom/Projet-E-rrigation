import { Module } from '@nestjs/common';
import { DonneesMeteoPeriodeService } from './donnees-meteo-periode.service';
import { DonneesMeteoPeriodeController } from './donnees-meteo-periode.controller';

@Module({
  controllers: [DonneesMeteoPeriodeController],
  providers: [DonneesMeteoPeriodeService],
})
export class DonneesMeteoPeriodeModule {}
