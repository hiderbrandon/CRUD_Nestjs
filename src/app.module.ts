import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoClient } from "mongodb";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import config from './config';
import { environments } from './environments';
import { DatabaseModule } from './database/database.module';
import { MongoModule } from './mongo/mongo.module';
import { PhotosModule } from './photos/photos.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || `.env`,
      load: [config],
      isGlobal: true,
    }),
    ClientsModule,
    DatabaseModule,
    MongoModule,
    PhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
