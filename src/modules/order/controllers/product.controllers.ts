import {Body, Controller,Post, UsePipes,Get, ValidationPipe,Param,ParseIntPipe} from "@nestjs/common";
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dto/product.dto';
import { SiparisService } from "../services/siparis.service";




@Controller('/siparis/products')
export class ProductController {
    constructor(private productService:ProductService,private siparisService:SiparisService){
    }
    @Post('')
    @UsePipes(ValidationPipe)
    async createNewProduct(@Body() product:CreateProductDto){
        return await this.productService.createNewProduct(product);

    }



}
