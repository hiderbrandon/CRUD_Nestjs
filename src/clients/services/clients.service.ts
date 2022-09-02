import { Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

import { Client } from 'src/clients/entities/client.entity';
import config from 'src/config';

@Injectable()
export class ClientsService {

    constructor(private configService: ConfigService) { }

    finAll() {//: Client[]
        const dbname = this.configService.get(`POSTGRES_DB`)
        console.log(dbname);
        //return this.clients;
    }
}
