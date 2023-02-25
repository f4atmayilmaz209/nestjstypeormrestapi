import {Repository,EntityRepository} from "typeorm";
import {SiparisEntity} from "../entities/siparis.entity";


@EntityRepository(SiparisEntity)
export class SiparisRepository extends Repository<SiparisEntity>{

} 