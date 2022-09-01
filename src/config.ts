import { registerAs } from "@nestjs/config";

export default registerAs(`config`, () => {
    return {
        database: process.env.POSTGRES_DB,
        postgres: {
            dbName: process.env.POSTGRES_DB,
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            password: process.env.POSTGRES_PASSWORD,
        }
    }
})