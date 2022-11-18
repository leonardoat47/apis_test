import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { exportedProviders, providers } from './providers';
import { schemas } from './schemas';

@Module({
  imports: [MongooseModule.forFeature(schemas, 'main')],
  controllers: [UserController],
  providers: [...providers],
  exports: [...exportedProviders],
})
export class UserModule {}
