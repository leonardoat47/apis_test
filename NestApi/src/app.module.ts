import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { configuration } from 'config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CajaModule } from './caja/caja.module';
import { AdmisionesModule } from './admisiones/admisiones.module';
import { AuthModule } from './auth/auth.module';
import { PolizasModule } from './polizas/polizas.module';
import { ProductosModule } from './productos/productos.module';
import { Productos } from './productos';
import { OrdenChequeModule } from './orden-cheque/orden-cheque.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URL}`, {
      connectionName: 'main',
    }),
    CajaModule,
    AdmisionesModule,
    AuthModule,
    PolizasModule,
    ProductosModule,
    OrdenChequeModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, Productos],
})
export class AppModule {}
