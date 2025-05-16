import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ReadlineParser, SerialPort } from 'serialport';

@Injectable()
export class ArduinoService implements OnApplicationBootstrap{
  serialport: SerialPort;
  parser: ReadlineParser; //transmet des données à chaque nouvelle ligne
  onApplicationBootstrap() { //code exécuté avant de recevoir des requêtes (sorte d'initialisation)
      
  }

}
