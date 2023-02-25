import { Entity, Column, PrimaryColumn,ManyToOne,JoinColumn,OneToMany } from 'typeorm';
import { SiparisEntity } from './siparis.entity';

@Entity('users')
export class UserEntity{

  @PrimaryColumn({ unique: true })
  id: number;
  @Column({type:"text",default:null})
  username: string;
  @Column({type:"text",default:null})
  lastname: string;
  @Column({type:"text",default:null})
  address: string;
  @OneToMany(()=>SiparisEntity,(siparis)=>siparis.user)
  sipariss:SiparisEntity[];



}