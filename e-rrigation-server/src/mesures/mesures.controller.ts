import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MesuresService } from './mesures.service';
import { CreateMesureDto } from './dto/create-mesure.dto';
import { UpdateMesureDto } from './dto/update-mesure.dto';

@Controller('mesures') //on définit le contrôleur des mesures : il contient une classe regroupant les commandes APIs retrouvables sur le swagger
export class MesuresController {
  constructor(private readonly mesuresService: MesuresService) {}

  @Post() //le @ (décorateur) permet de faire le lien avec le swagger (il augmente les possibilités d'actions de la méthode) : le nest interprète le @
  create(@Body() createMesureDto: CreateMesureDto) {
    return this.mesuresService.create(createMesureDto);
  }

  @Get()
  findAll() {
    return this.mesuresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesuresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMesureDto: UpdateMesureDto) {
    return this.mesuresService.update(+id, updateMesureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesuresService.remove(+id);
  }
}
