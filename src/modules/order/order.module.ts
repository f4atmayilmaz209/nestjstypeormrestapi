import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KampanyaController } from './controllers/kampanya.controllers';
import { ProductController } from './controllers/product.controllers';
import { SiparisController } from './controllers/siparis.controllers';
import { UserController } from './controllers/user.controllers';
import { KampanyaRepository } from './repositories/kampanya.repository';
import { ProductRepository } from './repositories/product.repository';
import { SiparisRepository } from './repositories/siparis.repository';
import { UserRepository } from './repositories/user.repository';
import { KampanyaService } from './services/kampanya.service';
import { ProductService } from './services/product.service';
import { SiparisService } from './services/siparis.service';
import { UserService } from './services/user.service';


@Module({
    controllers:[ProductController,UserController,SiparisController,KampanyaController],
    imports:[TypeOrmModule.forFeature([ProductRepository,UserRepository,SiparisRepository,KampanyaRepository])],
    providers:[ProductService,UserService,SiparisService,KampanyaService],
})
export class OrderModule {}
