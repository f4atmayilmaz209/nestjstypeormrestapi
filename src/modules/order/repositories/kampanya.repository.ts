import {Repository,EntityRepository} from "typeorm";
import {KampanyaEntity} from "../entities/kampanya.entity";


@EntityRepository(KampanyaEntity)
export class KampanyaRepository extends Repository<KampanyaEntity>{

} 