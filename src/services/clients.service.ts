import { Injectable } from '@nestjs/common';
import { Client } from 'src/entities/client.entity';

@Injectable()
export class ClientsService {

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
}
