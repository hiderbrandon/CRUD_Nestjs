import { Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

import { Client } from 'src/clients/entities/client.entity';
import config from 'src/config';

@Injectable()
export class ClientsService {

    constructor(private configService: ConfigService) { }
    private clients: Client[] = [{
        name: `hider`,
        lastName: `vargas`,
        idType: `cc`,
        id: 1,
        age: 26,
        city: `cali`,
    },
    {
        name: `gabe`,
        lastName: `arango`,
        idType: `cc`,
        id: 2,
        age: 21,
        city: `cali`,
    }]

    finAll(): Client[] {
        const dbname = this.configService.get(`POSTGRES_DB`)
        console.log(dbname);
        return this.clients;
    }
}
