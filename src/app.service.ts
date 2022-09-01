import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { Client } from 'src/clients/entities/client.entity';
import config from './config';
@Injectable()
export class AppService {
  constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>) { }

  getHello(): string {
    const dbname = this.configService.database;
    console.log(dbname);
    return 'Hello World!';
  }
}
