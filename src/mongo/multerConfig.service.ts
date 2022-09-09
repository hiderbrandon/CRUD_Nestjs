import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import * as GridFsStorage from 'multer-gridfs-storage';
import { Db } from "mongodb";


import config from '../config';


@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
    gridFsStorage: GridFsStorage;
    constructor(
        @Inject(`MONGO`) private mongoDatabase: Db,
        @Inject(config.KEY) private configService: ConfigType<typeof config>,
    ) {
        const { connection, user, password, host, port, dbName } = configService.mongodb;
        const uri =`${connection}://${host}:${port}`;
        this.gridFsStorage = new GridFsStorage({
            url: uri,
        });
    }

    createMulterOptions(): MulterModuleOptions {
        return {
            storage: this.gridFsStorage,
        };
    }
}