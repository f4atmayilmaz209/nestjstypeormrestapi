import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import { ProductRepository } from '../repositories/product.repository';
import { CreateProductDto } from '../dto/product.dto';
import { Products } from '../entities/product.entity';
@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductRepository) private productRepository:ProductRepository){}

  async createNewProduct(product:CreateProductDto){
      return await this.productRepository.save(product);

  }
  async findProductById(id:number):Promise<Products>{
    return await this.productRepository.findOne(id)}

}



