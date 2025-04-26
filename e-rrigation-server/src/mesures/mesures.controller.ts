import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MesuresService } from './mesures.service';
import { CreateMesureDto } from './dto/create-mesure.dto';
import { UpdateMesureDto } from './dto/update-mesure.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Mesure } from './entities/mesure.entity';

@ApiTags('mesures') //ajoute l'information "mesures" aux tags du contrôleur, définit le nom de la collection (sinon pas de titre associé au contrôleur)
@Controller('mesures') //on définit le contrôleur des mesures : il contient une classe regroupant les commandes APIs retrouvables sur le swagger
export class MesuresController {
  constructor(private readonly mesuresService: MesuresService) {}

  @Post() //le @ (décorateur) permet de faire le lien avec le swagger (il augmente les possibilités d'actions de la méthode) : le nest interprète le @
  @ApiOperation({ summary: 'Créer une nouvelle mesures'}) //s'affiche sur l'interface, mais n'est pas du code à proprement parler (comme du HTML)
  @ApiResponse({ status:201, description: 'La mesure a été créée avec succès.' }) //s'affiche lorsqu'on reçoit une réponse de l'API --> uniquement informatif
  create(@Body() createMesureDto: CreateMesureDto) {
    return this.mesuresService.create(createMesureDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les mesures' })
  @ApiResponse({ status: 200, description: 'Liste des mesures.', type: [Mesure] })
  findAll() {
    return this.mesuresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une mesure en fonction de son ID'})
  @ApiResponse({ status: 200, description: 'La mesure correspondante :', type: Mesure })
  @ApiResponse({ status: 404, description: 'La mesure n\'a pas été trouvée pour cet identifiant.' })
  findOne(@Param('id') id: string) {
    return this.mesuresService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une mesure' })
  @ApiResponse({ status: 200, description: 'Mesure mise à jour.', type: Mesure })
  @ApiResponse({ status: 404, description: 'La mesure n\'a pas été trouvée pour cet identifiant.' })
  update(@Param('id') id: string, @Body() updateMesureDto: UpdateMesureDto) {
    return this.mesuresService.update(+id, updateMesureDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une mesure' })
  @ApiResponse({ status: 200, description: 'La mesure a été supprimée.' })
  @ApiResponse({ status: 404, description: 'La mesure n\'a pas été trouvée pour cet identifiant.' })
  remove(@Param('id') id: string) {
    return this.mesuresService.remove(+id);
  }
}
