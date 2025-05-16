import { Module } from '@nestjs/common';
import { ArduinoService } from './arduino.service';

@Module({
  providers: [ArduinoService],
})
export class ArduinoModule {}
