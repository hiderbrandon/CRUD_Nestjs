import { CreateClientDto } from "./create-Client.dto";

import { PartialType } from "@nestjs/swagger";

export class UpdateClientDto extends PartialType(CreateClientDto) { }