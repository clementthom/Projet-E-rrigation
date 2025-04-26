import { ApiProperty } from "@nestjs/swagger";

export class Mesure {
    @ApiProperty({ description: 'Identifiant unique de la mesure' })
    id: string; //type de id : string

    @ApiProperty({ description: 'Température mesurée', example: 25.5 })
    temperature: number; //type de température : number

    @ApiProperty({ description: 'Humidité mesurée par le capteur 1', example: 60 })
    humidity1: number;

    @ApiProperty({ description: 'Humidité mesurée par le capteur 2', example: 65 })
    humidity2: number;

    @ApiProperty({ description: 'Intensité lumineuse mesurée', example: 800 })
    lightIntensity: number;
}
