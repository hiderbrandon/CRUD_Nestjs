import { Injectable, NotFoundException, RequestTimeoutException } from '@nestjs/common';
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
        const aClient = await this.clientRepo.findBy({ id: idNumber, idType: IdType });

        if (!aClient) {
            throw new NotFoundException(`product with idNumber: ${idNumber} not found`)
        }

        return aClient;
    }

    create(aClient: CreateClientDto) {
        const newClient = this.clientRepo.create(aClient);
        return this.clientRepo.save(newClient);
    }

    async update(idNumber: number, idType: "cc" | "ce" | "ti", changes: UpdateClientDto) {
        const aClient = await this.clientRepo.findBy({ id: 2, idType: "cc" });

        return aClient;
        await this.clientRepo.update({ id: idNumber, idType: idType }, changes)
    }

    async remove(idNumber: number, idType) {
        await this.clientRepo.delete({ id: idNumber, idType: idType })
    }
}
