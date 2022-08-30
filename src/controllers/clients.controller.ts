import { Controller, Get } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
    @Get()
    gatAllClients() {
        return "i suppose to list all Client !!"
    }

}
