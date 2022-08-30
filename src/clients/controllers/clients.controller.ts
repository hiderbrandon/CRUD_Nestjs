import { Controller, Get } from '@nestjs/common';
import { CreateClientDto } from '../dtos/create-Client.dto';
import { ClientsService } from '../services/clients.service';

@Controller('clients')
export class ClientsController {

    constructor(private readonly clientsService: ClientsService) { }

    @Get()
    gatAllClients(): CreateClientDto[] {
        return this.clientsService.finAll();
    }

}
