import { Global, Module } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';


@Global()
@Module({
    imports: [ConfigService,
        TypeOrmModule.forRootAsync({
            useFactory: (ConfigService: ConfigType<typeof config>) => {
                console.log(`configservice es  : ${ConfigService}`)
                const { user, host, dbName, password, port } = ConfigService.postgres;
                return {
                    type: "postgres",
                    host,
                    port,
                    username: user,
                    password,
                    database: dbName,
                    synchronize: true,
                    autoLoadEntities: true,
                };
            },
        }),
    ],
    exports: [TypeOrmModule],
})

export class DatabaseModule { }
