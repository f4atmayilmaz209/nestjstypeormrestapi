import {Body, Controller,Post, UsePipes,Get, ValidationPipe,Param,ParseIntPipe} from "@nestjs/common";
import { KampanyaService } from '../services/kampanya.service';
import { CreateKampanyaDto } from '../dto/kampanya.dto';
import { KampanyaEntity } from "../entities/kampanya.entity";





@Controller('/kampanya')
export class KampanyaController {
    constructor(private kampanyaService:KampanyaService){
    }
    @Post('')
    @UsePipes(ValidationPipe)
    async createNewKampanya(@Body() kampanya:CreateKampanyaDto){
        return await this.kampanyaService.createNewKampanya(kampanya);

    }
    @Get('/kampanyalar')
    async getAllKampanya():Promise<KampanyaEntity[]>{
        return await this.kampanyaService.getAllKampanya();

    }



}
