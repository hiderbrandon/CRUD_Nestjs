import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from "pg";

import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject(`PG`) private conetionPG: Client) { }

  getHello(): string {
    const dbname = this.configService.database;
    console.log(dbname);
    return 'Hello World!';
  }

  getClients() {
    return new Promise((resolve, reject) => {
      this.conetionPG.query(`SELECT * FROM cliente`, (err, res) => {
        if (err) {
          reject(err);
        }
        else { resolve(res.rows); }
      })
    })

  }


}
