import { CreateClientDto } from "./create-Client.dto";

import { PartialType } from "@nestjs/mapped-types";

export class UpdateClientDto extends PartialType(CreateClientDto) { }