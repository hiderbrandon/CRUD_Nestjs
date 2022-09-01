import { registerAs } from "@nestjs/config";

export default registerAs(`config`, () => {
    return {database: process.env.POSTGRES_DB,}
})