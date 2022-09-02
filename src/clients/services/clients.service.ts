import { Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

import { Client } from '../entities/client.entity';
import config from 'src/config';

@Injectable()
export class ClientsService {

    constructor(
        private configService: ConfigService,
        @InjectRepository(Client) private clientRepo: Repository<Client>,
    ) { }

    finAll() {//: Client[]
        this.clientRepo.find()
    }

    findOne(idNumber: number) {
        const aClient = this.clientRepo.findOneBy({ id: idNumber });
    }
}
