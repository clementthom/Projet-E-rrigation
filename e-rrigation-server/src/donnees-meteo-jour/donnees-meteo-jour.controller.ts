import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonneesMeteoJourService } from './donnees-meteo-jour.service';
import { CreateDonneesMeteoJourDto } from './dto/create-donnees-meteo-jour.dto';
import { UpdateDonneesMeteoJourDto } from './dto/update-donnees-meteo-jour.dto';

@Controller('donnees-meteo-jour')
export class DonneesMeteoJourController {
  constructor(private readonly donneesMeteoJourService: DonneesMeteoJourService) {}

  @Post()
  create(@Body() createDonneesMeteoJourDto: CreateDonneesMeteoJourDto) {
    return this.donneesMeteoJourService.create(createDonneesMeteoJourDto);
  }

  @Get()
  findAll() {
    return this.donneesMeteoJourService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donneesMeteoJourService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonneesMeteoJourDto: UpdateDonneesMeteoJourDto) {
    return this.donneesMeteoJourService.update(+id, updateDonneesMeteoJourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donneesMeteoJourService.remove(+id);
  }
}
