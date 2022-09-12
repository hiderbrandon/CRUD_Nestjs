import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Photo, PhotoSchema } from './entities/photo.entity';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Photo.name,
            schema: PhotoSchema,
        }])],
    controllers: [PhotosController],
    providers: [PhotosService],
})
export class PhotosModule { }
