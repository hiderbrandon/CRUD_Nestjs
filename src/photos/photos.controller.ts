import { Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePhotoDto } from './dtos/create-photo.dto';
import { UpdatePhotoDto } from './dtos/update-Photo.dto';
import { PhotosService } from "./photos.service";

@Controller('photos')
export class PhotosController {
    constructor(private readonly photosService: PhotosService) { };

    @Get()
    getAllPhotos() {
        return this.photosService.findAll();
    }
    @Get(`:idNumber/:idType`)
    getOnePhoto(
        @Param(`idNumber`) idNumber: number,
        @Param(`idType`) idType: "cc" | "ce" | "ti") {
        return this.photosService.findOne(idNumber, idType);
    }

    @Post(`:idNumber/:idType`)
    @UseInterceptors(FileInterceptor(`file`))
    UploadPhoto(
        @UploadedFile() file: Express.Multer.File,
        @Param(`idNumber`) idNumber: number,
        @Param(`idType`) idType: "cc" | "ce" | "ti") {

        let myImage64: string = file.buffer.toString(`base64`);
        let payload: CreatePhotoDto = { idNumber: idNumber, idType: idType, photo: myImage64 };

        return this.photosService.create(payload);
    }

    @Put(`:idNumber/:idType`)
    @UseInterceptors(FileInterceptor(`file`))
    upDatePhoto(
        @UploadedFile() file: Express.Multer.File,
        @Param(`idNumber`) idNumber: number,
        @Param(`idType`) idType: "cc" | "ce" | "ti") {

        let myImage64: string = file.buffer.toString(`base64`);
        let payload: UpdatePhotoDto = { idNumber: idNumber, idType: idType, photo: myImage64 };

        return this.photosService.update(payload);
    }
}
