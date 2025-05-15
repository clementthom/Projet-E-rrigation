import { Injectable } from '@nestjs/common';
import { CreateDonneesMeteoJourDto } from './dto/create-donnees-meteo-jour.dto';
import { UpdateDonneesMeteoJourDto } from './dto/update-donnees-meteo-jour.dto';

@Injectable()
export class DonneesMeteoJourService {
  create(createDonneesMeteoJourDto: CreateDonneesMeteoJourDto) {
    return 'This action adds a new donneesMeteoJour';
  }

  findAll() {
    return `This action returns all donneesMeteoJour`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donneesMeteoJour`;
  }

  update(id: number, updateDonneesMeteoJourDto: UpdateDonneesMeteoJourDto) {
    return `This action updates a #${id} donneesMeteoJour`;
  }

  remove(id: number) {
    return `This action removes a #${id} donneesMeteoJour`;
  }
}
