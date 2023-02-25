import {Body, Controller,Post, UsePipes,Get, ValidationPipe,Param,ParseIntPipe} from "@nestjs/common";
import { SiparisService } from '../services/siparis.service';
import { CreateSiparisDto } from '../dto/siparis.dto';
import { UserService } from "../services/user.service";
import { SiparisEntity } from "../entities/siparis.entity";
import { ProductService } from "../services/product.service";




@Controller('/siparis')
export class SiparisController {
    constructor(private siparisService:SiparisService,private userService:UserService,private productService:ProductService){
    }
    @Post('')
    @UsePipes(ValidationPipe)
    async SaveSiparis(@Body() siparis:CreateSiparisDto):Promise<SiparisEntity>{
        const user=await this.userService.getUserById(siparis.userId)
        return await this.siparisService.createNewSiparis(siparis,user);

    }
    @Post('/:siparis_id')
    async saveProductToSiparis(@Param('siparis_id') siparis_id: number,@Body() createSiparis:CreateSiparisDto){
        const siparis=await this.siparisService.findSiparisById(siparis_id);
        const product=await this.productService.findProductById(createSiparis.urun_id);
        return await this.siparisService.saveProductToSiparis(product,siparis);
    }
    @Get('/siparislerim')
    async getAllSiparis():Promise<SiparisEntity[]>{
        return await this.siparisService.getAllSiparis();

    }
    @Get('/siparislerim/:siparisid')
    async findSiparisById(@Param('siparisid') siparisid: number,):Promise<SiparisEntity>{
        console.log("dsds")
        return await this.siparisService.findSiparisById(siparisid)
    
      }

}