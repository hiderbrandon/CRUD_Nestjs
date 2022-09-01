import { Global, Inject, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from '../config';


/*
  client.query(`SELECT * FROM cliente`, (err, res) => {
    console.error(err);
    console.log(res);
  })
*/




@Global()
@Module({
    providers: [
        {
            provide: `PG`,
            useFactory: (myConfig: ConfigType<typeof config>) => {
                const { user, host, dbName, password, port } = myConfig.postgres;
                const client = new Client({
                    user,
                    host,
                    database: dbName,
                    password,
                    port,
                });
                client.connect();
                return client;
            },
            inject: [config.KEY]
        }
    ],
    exports: [`PG`],
})
export class DatabaseModule { }
