import { Injectable } from '@nestjs/common';
import { CreateDonneesMeteoPeriodeDto } from './dto/create-donnees-meteo-periode.dto';
import { UpdateDonneesMeteoPeriodeDto } from './dto/update-donnees-meteo-periode.dto';

@Injectable()
export class DonneesMeteoPeriodeService {
  create(createDonneesMeteoPeriodeDto: CreateDonneesMeteoPeriodeDto) {
    return 'This action adds a new donneesMeteoPeriode';
  }

  findAll() {
    return `This action returns all donneesMeteoPeriode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donneesMeteoPeriode`;
  }

  update(id: number, updateDonneesMeteoPeriodeDto: UpdateDonneesMeteoPeriodeDto) {
    return `This action updates a #${id} donneesMeteoPeriode`;
  }

  remove(id: number) {
    return `This action removes a #${id} donneesMeteoPeriode`;
  }
}
