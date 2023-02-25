import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import { KampanyaRepository } from '../repositories/kampanya.repository';
import { CreateKampanyaDto } from '../dto/kampanya.dto';
import { KampanyaEntity } from '../entities/kampanya.entity';
@Injectable()
export class KampanyaService {
  constructor(@InjectRepository(KampanyaRepository) private kampanyaRepository:KampanyaRepository){}

  async createNewKampanya(kampanya:CreateKampanyaDto){
      return await this.kampanyaRepository.save(kampanya);

  }
  async findProductById(id:number):Promise<KampanyaEntity>{
    return await this.kampanyaRepository.findOne(id)}
  async getAllKampanya():Promise<KampanyaEntity[]>{
        return await this.kampanyaRepository.find()
    }

}

