import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../dto/user.dto';
import { UserEntity } from '../entities/user.entity';
@Injectable()
export class UserService {
  constructor(@InjectRepository(UserRepository) private userRepository:UserRepository){}

  async createNewUser(user:CreateUserDto){ 
      return await this.userRepository.save(user);

  }
  async getUserById(id:number):Promise<UserEntity>{
    return await this.userRepository.findOne(id, { relations: ['sipariss','sipariss.products'] });
  }
  async getAllUsers():Promise<UserEntity[]>{
    return await this.userRepository.createQueryBuilder('q')
    .leftJoinAndSelect('q.sipariss','qt')
    .leftJoinAndSelect('qt.products','qte')
    .getMany();

}

}


