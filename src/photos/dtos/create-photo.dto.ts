import { IsString, IsNotEmpty, IsInt } from 'class-validator';


export class CreatePhotoDto {
    @IsString()
    photo: string;
    @IsInt()
    @IsNotEmpty()
    idNumber: number;
    @IsString()
    @IsNotEmpty()
    idType: "cc" | "ce" | "ti";
}