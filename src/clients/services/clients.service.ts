import { HttpException, HttpStatus, Injectable, NotFoundException, RequestTimeoutException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

import { Client } from '../entities/client.entity';
import config from 'src/config';
import { CreateClientDto } from '../dtos/create-Client.dto';
import { UpdateClientDto } from '../dtos/update-client.dto';

@Injectable()
export class ClientsService {

    constructor(
        private configService: ConfigService,
        @InjectRepository(Client) private clientRepo: Repository<Client>,
    ) { }

    finAll() {
        this.clientRepo.find()
    }

    async findOne(idNumber: number, IdType: "cc" | "ce" | "ti") {
        const aClient = await this.clientRepo.findOneBy({ id: idNumber, idType: IdType });

        if (!aClient) {
            throw new NotFoundException(`product with id number: ${idNumber} and id type: ${IdType} not found`)
        }

        return aClient;
    }

    async create(aClient: CreateClientDto) {
        const myClient = await this.clientRepo.findOneBy(aClient);

        if (!myClient) {
            const newClient = this.clientRepo.create(aClient);
            return this.clientRepo.save(newClient);
        }
        else {
            throw new HttpException(`a client with id type ${aClient.idType} and id number : ${aClient.id} already exist`, HttpStatus.FOUND);
        }

    }

    async update(idNumber: number, idType: "cc" | "ce" | "ti", changes: UpdateClientDto) {
        const aClient = await this.clientRepo.findOneBy({ id: idNumber, idType: idType });

        if (!aClient) {
            throw new NotFoundException(`product with id number: ${idNumber} with id type ${idType} doesn't exist`);
        }
        await this.clientRepo.update({ id: idNumber, idType: idType }, changes);

    }

    async remove(idNumber: number, idType) {
        const aClient = await this.clientRepo.findOneBy({ id: idNumber, idType: idType });

        if (!aClient) {
            throw new NotFoundException();
        }
        //await this.clientRepo.delete({ id: idNumber, idType: idType });
    }
}
