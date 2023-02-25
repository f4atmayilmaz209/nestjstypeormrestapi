import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import { CreateKampanyaDto } from '../dto/kampanya.dto';
import { CreateProductDto } from '../dto/product.dto';
import { CreateSiparisDto } from '../dto/siparis.dto';
import { SiparisEntity } from '../entities/siparis.entity';
import { UserEntity } from '../entities/user.entity';
import { KampanyaRepository } from '../repositories/kampanya.repository';
import { ProductRepository } from '../repositories/product.repository';
import { SiparisRepository } from '../repositories/siparis.repository';
import { UserService } from "../services/user.service";
import { ProductService } from './product.service';

@Injectable()
export class SiparisService {
  constructor(@InjectRepository(SiparisRepository) private siparisRepository:SiparisRepository,private userService:UserService,private productRepository:ProductRepository,private kampanyaRepository:KampanyaRepository){}


  async createNewSiparis(siparis:CreateSiparisDto,user:UserEntity):Promise<SiparisEntity>{
    const newSiparis= await this.siparisRepository.save({
        siparis_title:siparis.siparis_title
    });
    user.sipariss = [...user.sipariss, newSiparis];
    await this.userService.createNewUser(user)
    return newSiparis;
  }
  async findSiparisById(siparis_id:number):Promise<SiparisEntity>{
    return await this.siparisRepository.findOne(siparis_id,{relations:['user','products','kampanyas']})

  }
  async saveProductToSiparis(product:CreateProductDto,siparis:SiparisEntity){
    if(product.stock_quantity>0){
      const newProduct=await this.productRepository.save({
          product_id:product.product_id,
          title:product.title,
          category_id:product.category_id,
          category_title:product.category_title,
          author:product.author,
          stock_quantity:product.stock_quantity-1,
          list_price:product.list_price
      })
      if (siparis.products){
        siparis.products=[...siparis.products,newProduct];

      }else{
        siparis.products=[newProduct]

      }
      let toplamfiyat = 0;
      let siparisuzunluk=siparis.products.length
      let siparisfiyatlistesi=[]
      for(let i = 0; i <= siparisuzunluk-1; i++) {
          siparisfiyatlistesi.push(siparis.products[i]['list_price'])
          toplamfiyat += siparis.products[i]['list_price'];
      }

      if(siparisuzunluk>=2){
        if(siparisuzunluk%2==0){
          let sayi=siparisuzunluk/2;
          let siralisayi=siparisfiyatlistesi.sort(function(a, b){return b - a});
          let toplamsayi=0;
          for(let i=0; i<=sayi-1; i++){
            toplamsayi += siralisayi[i];
          }
          var sonfiyat=toplamfiyat-toplamsayi;
          siparis.siparistoplamfiyat=sonfiyat;
          
        }else{
          let sayi=Math.floor(siparisuzunluk/2);
          console.log(sayi)
          let siralisayi=siparisfiyatlistesi.sort(function(a, b){return b - a});
          let toplamsayi=0;
          for(let i=0; i<=sayi-1; i++){
            toplamsayi += siralisayi[i];
          }
          var sonfiyat=toplamfiyat-toplamsayi;
          siparis.siparistoplamfiyat=sonfiyat;

        }

        var id=1
        var text="2 kitap alana 1 bedava kampanya hakkını kazandınız!"
        const newKampanya=await this.kampanyaRepository.save({
          id:id,
          text:text,

      })
        siparis.kampanyas=[newKampanya];
        await this.siparisRepository.save(siparis)
        
      }else{
        siparis.siparistoplamfiyat=toplamfiyat;

      }

      return await this.siparisRepository.save(siparis)
    }else{
      return {
        "statusCode": 403,
        "message": "ürün stokta bulunmamaktadır"
      }

    }
  }
  async getAllSiparis():Promise<SiparisEntity[]>{
    return await this.siparisRepository
    .createQueryBuilder("question")
    .leftJoinAndSelect("question.products", "category")
    .getMany()
}


}