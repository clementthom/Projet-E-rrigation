import { ApiProperty } from "@nestjs/swagger";

export class Mesure {
    @ApiProperty({ description: 'Identifiant unique de la mesure' })
    id: string; //type de id : string

    @ApiProperty({ description: 'Température mesurée', example: 25.5 })
    temperature: number; //type de température : number

    @ApiProperty({ description: 'Humidité mesurée par le capteur extérieur', example: 80 })
    humidityExt: number;

    @ApiProperty({ description: 'Humidité mesurée par le capteur 1', example: 60 })
    humidity1: number;

    @ApiProperty({ description: 'Humidité mesurée par le capteur 2', example: 65 })
    humidity2: number;

    @ApiProperty({ description: 'Intensité lumineuse mesurée', example: 800 })
    lightIntensity: number;

    @ApiProperty({ description: 'Horodatage de la mesure', example: '2025-03-30T12:34:56.789Z' })
    timestamp: string; // Format ISO 8601
}
