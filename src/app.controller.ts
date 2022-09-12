import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(`clients`)
  getClientAllClients() {
    return this.appService.getClients();
  }

  /*
   @Get(`photos`)
   getAllPhotos() {
     return this.appService.getPhotos();
   }
  */

  @Post(`photo`)
  @UseInterceptors(FileInterceptor(`file`))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file.buffer.toString(`base64`));
  }

}
