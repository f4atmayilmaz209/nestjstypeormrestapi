import { Entity, Column, PrimaryColumn,ManyToOne,JoinColumn,OneToMany } from 'typeorm';
import { SiparisEntity } from './siparis.entity';


@Entity('kampanya')
export class KampanyaEntity{

  @PrimaryColumn({ unique: true })
  id: number;
  @Column({type:"text",default:null})
  text: string;
  @ManyToOne(()=>SiparisEntity,(siparis)=>siparis.kampanyas)
  siparis:SiparisEntity


}