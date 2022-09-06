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

    @Get(`:idNumber/:idType`)
    finOne(@Param("idNumber", ParseIntPipe) idNumber: number, @Param(`idType`) IdType: "cc" | "ce" | "ti") {
        return this.clientsService.findOne(idNumber, IdType);
    }

    @Post()
    create(@Body() payload: CreateClientDto) {
        return this.clientsService.create(payload);
    }

    @Put(`:idNumber/:idType`)
    update(@Param(`idNumber`) idnumber: number, @Param(`idType`) idType: "cc" | "ce" | "ti", @Body() payload: UpdateClientDto) {
        return this.clientsService.update(idnumber, idType, payload);
    }

    @Delete(`:idNumber/:idType`)
    delete(@Param(`idNumber`) idNumber: number , @Param(`idType`) idType: "cc" | "ce" | "ti" ) {
        this.clientsService.remove(idNumber , idType )
    }
}
