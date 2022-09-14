import { Get, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Photo } from './entities/photo.entity';
import { CreatePhotoDto } from "./dtos/create-photo.dto";
import { UpdatePhotoDto } from './dtos/update-Photo.dto';


@Injectable()
export class PhotosService {
    constructor(@InjectModel(Photo.name) private photoModel: Model<Photo>) { }

    async findAll() {
        return await this.photoModel.find()
    }

    async findOne(idNumber: number, idType: "cc" | "ce" | "ti") {
        const aPhoto = await this.photoModel.findOne({ idNumber, idType }).exec();

        if (!aPhoto) {
            throw new HttpException("this user doesn't have a photo yet  , may be you want to CREATE", HttpStatus.NOT_FOUND);
        }

        return aPhoto;
    }

    async create(myPhoto: CreatePhotoDto) {
        const newPhoto = new this.photoModel(myPhoto);
        const aPhoto = await this.photoModel.findOne({ idNumber: myPhoto.idNumber, idType: myPhoto.idType }).exec();
        console.log(!aPhoto);

        if (aPhoto) {
            throw new HttpException("this user already have photo , may be you want to update ", HttpStatus.FOUND);
        }
        return newPhoto.save();
    }

    async update(myPhoto: UpdatePhotoDto): Promise<{}> {
        const aPhoto = await this.photoModel.findOne({ idNumber: myPhoto.idNumber, idType: myPhoto.idType }).exec();

        if (!aPhoto) {
            throw new HttpException("this user doesn't have a photo yet  , may be you want to CREATE", HttpStatus.NOT_FOUND);
        }
        const succes = await this.photoModel.findOneAndUpdate(
            { idNumber: myPhoto.idNumber },
            { $set: { photo: myPhoto.photo } });

        console.log(succes);
        return succes;
    }

    async remove(idNumber: number, idType: "cc" | "ce" | "ti") {
        const aPhoto = await this.photoModel.findOne({ idNumber, idType }).exec();

        if (!aPhoto) {
            throw new HttpException("this user doesn't have a photo yet  , may be you want to CREATE", HttpStatus.NOT_FOUND);
        }

        return await this.photoModel.remove({ idNumber, idType }).exec();
    }

}
