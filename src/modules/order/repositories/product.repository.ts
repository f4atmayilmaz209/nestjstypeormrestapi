import {Repository,EntityRepository} from "typeorm";
import {Products} from "../entities/product.entity";


@EntityRepository(Products)
export class ProductRepository extends Repository<Products>{

} 