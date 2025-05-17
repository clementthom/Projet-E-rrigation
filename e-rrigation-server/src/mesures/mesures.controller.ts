import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MesuresService } from './mesures.service';
import { CreateMesureDto } from './dto/create-mesure.dto';
import { UpdateMesureDto } from './dto/update-mesure.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Mesure } from './entities/mesure.entity';
import { promises } from 'dns';

@ApiTags('mesures') //ajoute l'information "mesures" aux tags du contrôleur, définit le nom de la collection (sinon pas de titre associé au contrôleur)
@Controller('mesures') //on définit le contrôleur des mesures : il contient une classe regroupant les commandes APIs retrouvables sur le swagger
export class MesuresController {
  constructor(private readonly mesuresService: MesuresService) {}

  @Post() //le @ (décorateur) permet de faire le lien avec le swagger (il augmente les possibilités d'actions de la méthode) : le nest interprète le @
  @ApiOperation({ summary: 'Créer une nouvelle mesures'}) //s'affiche sur l'interface, mais n'est pas du code à proprement parler (comme du HTML)
  @ApiResponse({ status:201, description: 'La mesure a été créée avec succès.', type: Mesure }) //s'affiche lorsqu'on reçoit une réponse de l'API --> uniquement informatif
  async create(@Body() createMesureDto: CreateMesureDto): Promise<Mesure> { //renvoie une mesure à partir du dto create
    return await this.mesuresService.create(createMesureDto); //le awaits vient de pair avec async
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les mesures' })
  @ApiResponse({ status: 200, description: 'Liste des mesures.', type: [Mesure] })
  async findAll(): Promise<Mesure[]> {
    return await this.mesuresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une mesure en fonction de son ID'})
  @ApiResponse({ status: 200, description: 'La mesure correspondante :', type: Mesure })
  @ApiResponse({ status: 404, description: 'La mesure n\'a pas été trouvée pour cet identifiant.' })
  async findOne(@Param('id') id: string): Promise<Mesure | undefined> { //renvoie soit une Mesure soit rien(404) (| : union type, il a les deux types mais se comporte comme l'un ou l'autre selon la demande)
    return await this.mesuresService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une mesure' })
  @ApiResponse({ status: 200, description: 'Mesure mise à jour.', type: Mesure })
  @ApiResponse({ status: 404, description: 'La mesure n\'a pas été trouvée pour cet identifiant.' })
  async update(@Param('id') id: string, @Body() updateMesureDto: UpdateMesureDto): Promise<Mesure | undefined>  {
    return await this.mesuresService.update(id, updateMesureDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une mesure' })
  @ApiResponse({ status: 200, description: 'La mesure a été supprimée.' })
  @ApiResponse({ status: 404, description: 'La mesure n\'a pas été trouvée pour cet identifiant.' })
  async delete(@Param('id') id: string): Promise<boolean>  {
    return await this.mesuresService.delete(id);
  }

  @Post('clear')
  @ApiOperation({ summary: 'Supprimer toutes les mesures' })
  @ApiResponse({ status: 200, description: 'Toutes les mesures ont été supprimées.' })
  async clearMesures(): Promise<void> {
    await this.mesuresService.clearMesures();
  }
}
