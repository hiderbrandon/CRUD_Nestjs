import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from "pg";
import { Db } from "mongodb";

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject(`PG`) private conetionPG: Client,
    @Inject(`MONGO`) private mongoDatabase: Db) { }

  getHello(): string {
    const dbname = this.configService.database;
    console.log(dbname);
    return 'Hello World!';
  };

  getClients() {
    return new Promise((resolve, reject) => {
      this.conetionPG.query(`SELECT * FROM client`, (err, res) => {
        if (err) {
          reject(err);
        }
        else { resolve(res.rows); }
      })
    })
  };

  async getPhotos() {
    const photoCollection = this.mongoDatabase.collection(`photo`);
    const photos = await photoCollection.find().toArray();

    return photos;
  }


}
