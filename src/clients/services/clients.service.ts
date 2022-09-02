import { Injectable } from '@nestjs/common';
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

    finAll() {//: Client[]
        this.clientRepo.find()
    }

    async findOne(idNumber: number) {
        const aClient = await this.clientRepo.findOneBy({ id: idNumber });
        return aClient;
    }

    create(aClient: CreateClientDto) {
        const newClient = this.clientRepo.create(aClient);
        return this.clientRepo.save(newClient);
    }

    async update(idNumber: number, changes: UpdateClientDto) {
        const aClient = await this.clientRepo.findOneBy({ id: idNumber });
        this.clientRepo.merge(aClient, changes);
        return this.clientRepo.save(aClient);
    }

    remove(idNumber: number) {
        return this.clientRepo.delete(idNumber)
    }
}
