import { Entity, Column, PrimaryColumn,ManyToOne,JoinColumn,OneToMany, ManyToMany,JoinTable } from 'typeorm';
import { KampanyaEntity } from './kampanya.entity';
import { Products } from './product.entity';
import { UserEntity } from './user.entity';

@Entity('siparis')
export class SiparisEntity{

  @PrimaryColumn({ unique: true })
  id: number;
  @Column({type:"text",default:null})
  siparis_title:string;
  @Column({type:"float",default:null})
  siparistoplamfiyat:number;
  @Column({type:"text",default:null})
  urun_id:number;
  @ManyToOne(()=>UserEntity,(user)=>user.sipariss)
  user:UserEntity
  @OneToMany(()=>KampanyaEntity,(kampanya)=>kampanya.siparis)
  kampanyas:KampanyaEntity[];
  @OneToMany(() => Products,(product) => product.siparis)
  products?: Products[]





}