import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonneesMeteoPeriodeService } from './donnees-meteo-periode.service';
import { CreateDonneesMeteoPeriodeDto } from './dto/create-donnees-meteo-periode.dto';
import { UpdateDonneesMeteoPeriodeDto } from './dto/update-donnees-meteo-periode.dto';

@Controller('donnees-meteo-periode')
export class DonneesMeteoPeriodeController {
  constructor(private readonly donneesMeteoPeriodeService: DonneesMeteoPeriodeService) {}

  @Post()
  create(@Body() createDonneesMeteoPeriodeDto: CreateDonneesMeteoPeriodeDto) {
    return this.donneesMeteoPeriodeService.create(createDonneesMeteoPeriodeDto);
  }

  @Get()
  findAll() {
    return this.donneesMeteoPeriodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donneesMeteoPeriodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonneesMeteoPeriodeDto: UpdateDonneesMeteoPeriodeDto) {
    return this.donneesMeteoPeriodeService.update(+id, updateDonneesMeteoPeriodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donneesMeteoPeriodeService.remove(+id);
  }
}
