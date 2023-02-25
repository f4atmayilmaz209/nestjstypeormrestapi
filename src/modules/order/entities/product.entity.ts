import { Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany,PrimaryColumn,ManyToMany,JoinTable } from 'typeorm';
import { SiparisEntity } from './siparis.entity';

@Entity('products')
export class Products{

  @PrimaryColumn({ unique: true })
  product_id: number;
  @Column({type:"text",default:null})
  title: string;
  @Column({default:null})
  category_id: number;
  @Column({type:"text",default:null})
  category_title: string;
  @Column({type:"text",default:null})
  author: string;
  @Column({type:"float",default:null})
  list_price: number;
  @Column({default:null})
  stock_quantity: number;
  @Column({default:null})
  siparisId: number;
  @ManyToOne(() => SiparisEntity,(siparis) => siparis.products)
  siparis?: SiparisEntity[];




}