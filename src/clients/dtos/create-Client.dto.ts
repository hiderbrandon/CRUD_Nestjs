
import { IsString, IsNotEmpty, IsInt } from 'class-validator';


export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    lastName: string;
    @IsString()
    @IsNotEmpty()
    idType: `cc` | `ce` | `ti`;
    @IsInt()
    @IsNotEmpty()
    id: number;
    @IsInt()
    @IsNotEmpty()
    age: number;
    @IsString()
    @IsNotEmpty()
    city: string;


}