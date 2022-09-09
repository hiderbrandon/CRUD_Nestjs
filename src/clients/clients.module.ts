import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';


import { ClientsController } from './controllers/clients.controller';
import { ClientsService } from './services/clients.service';
import { Client } from './entities/client.entity';
import { Photo, PhotoSchema } from './entities/photo.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Client]),
    MongooseModule.forFeature([{
        name: Photo.name,
        schema: PhotoSchema,
    }])],
    controllers: [ClientsController],
    providers: [ClientsService],
})
export class ClientsModule { }
