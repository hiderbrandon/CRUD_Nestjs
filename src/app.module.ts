import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Client } from 'pg';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import config from './config';
import { environments } from './environments';

const client = new Client({
  user: `root`,
  host: `localhost`,
  database: `my_db`,
  password: `123456`,
  port: 5432
})

client.connect()

client.query(`SELECT * FROM client`)

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || `.env`,
      load: [config],
      isGlobal: true,
    }),
    ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
