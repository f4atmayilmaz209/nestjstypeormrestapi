import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './modules/order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Products } from './modules/order/entities/product.entity';
import { UserEntity } from './modules/order/entities/user.entity';
import { SiparisEntity } from './modules/order/entities/siparis.entity';
import { KampanyaEntity } from './modules/order/entities/kampanya.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.development.env',}
    ),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get("POSTGRES_HOST"),
        port: configService.get("POSTGRES_PORT"),
        username: configService.get("POSTGRES_USER"),
        password: configService.get("POSTGRES_PASSWORD"),
        database: configService.get("POSTGRES_DATABASE"),
        entities: [Products, UserEntity, SiparisEntity, KampanyaEntity],
        synchronize: true,
        logging:true,
        autoLoadEntities: true,
      }),
    }),OrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
