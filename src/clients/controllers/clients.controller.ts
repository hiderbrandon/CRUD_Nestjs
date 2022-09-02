import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, } from '@nestjs/common';
import { isModuleNamespaceObject } from 'util/types';
import { CreateClientDto } from '../dtos/create-Client.dto';
import { UpdateClientDto } from '../dtos/update-client.dto';
import { ClientsService } from '../services/clients.service';

@Controller('clients')
export class ClientsController {

    constructor(private readonly clientsService: ClientsService) { }

    @Get()
    gatAllClients() {//: CreateClientDto[]
        return this.clientsService.finAll();
    }

    @Get(`:idNumber?`)
    finOne(@Param("idNumber", ParseIntPipe) idNumber: number) {
        return this.clientsService.findOne(idNumber);
    }

    @Post()
    create(@Body() payload: CreateClientDto) {
        return this.clientsService.create(payload);
    }

    @Put(`:idNumber`)
    update(@Param(`:idNumber`, ParseIntPipe) idnumber: number, @Body() payload: UpdateClientDto) {
        return this.clientsService.update(idnumber, payload);
    }

    @Delete(`:idNumber`)
    delete(@Param(`:idNumber`, ParseIntPipe) idNumber: number) {
        this.clientsService.remove(idNumber)
    }
}
